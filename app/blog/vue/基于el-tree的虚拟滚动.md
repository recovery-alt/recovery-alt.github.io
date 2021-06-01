---
title: 基于el-tree的虚拟滚动
date: 2021-03-15
sidebar: 'auto'
categories:
  - vue
tags:
  - vue
---

## 思路

1. 用一个 prop(`useVirtualScroll`)控制输入确保不会污染 el-tree 源码
2. 在完整的树上截取一个树片段
3. 对片段树进行处理，去除所有的 childNodes(称之为`releaseNodeLoad`)
4. 使用树片段进行渲染
5. 处理滚动/展开/收缩/查询，每一次都触发以上步骤 2-4

## 难点

- 如何截取片段树
- 如何将片段构建成一个片段树
- 滚动的实现和优化

```js
const ELTree = {
  root: {
    data: [], // 传入的data
    childNodes: [], // 实际渲染的树节点
  }, // 树的根节点(完整树)
  virtualTree: { childNodes: [] }, // 片段树
  start: 0, // 起始位置
  itemHeight: 26, // 每一个节点的高度
  paddingTop: 0, // 虚拟滚动垫的高度
  boxMaxNumber: 0, // 可视区域可容纳个数
  totalDisplay: 0, // 完整树中需要显示在页面的节点数
  counter: 0, // 计数器，记录遍历推入片段树
  maxStart: 0, // 起始位置的最大值(触底判断)
};
```

### 难点一：如何截取片段树

确定片段树()的起点和终点

```js
// 1. 页面mounted 2.传入data改变 3. 过滤时
this.start = 0;

// 滚动时
function getStartIndex(scrollTop) {
  let startIndex = ~~(scrollTop / this.itemHeight);
  return startIndex >= 0 ? startIndex : 0;
}

// 折叠/展开
this.start = this.paddingTop / this.itemHeight;
```

计算可视区域可容纳个数(boxMaxNumber)

- 正常情况
  - 记录所有展开的 key，并推入数组(expandedKeys)
  - 在展开/折叠的时候维护 expandedKeys
  - 遍历 expandedKeys，并通过 key 递归该 key 的所有子节点，将满足条件 1.没有 push 过 2.level 大于 1 的 key 推入数组(keys)
  - 输出`keys.length + this.root.childNodes.length`
- 过滤条件
  - 只要遍历完整树，选出其中节点的`expanded`为`true`

```js
// 计算出所有默认展开的keys
function calcExpandedKeys() {
  this.expandedKeys = [];
  if (this.defaultExpandAll) {
    this.expandedKeys = Object.keys(this.nodesMap);
    return;
  }

  if (this.defaultExpandedKeys) {
    this.expandedKeys = [...this.defaultExpandedKeys];
  }
}

// 展开/折叠维护expandedKeys
function handleVirtualTreeExpand() {
  if (this.useVirtualScroll) {
    const { expandedKeys, key } = this.tree.store;
    const nodeKey = this.node.data[key];

    if (this.expanded) {
      const index = expandedKeys.indexOf(nodeKey);
      if (index > -1) {
        expandedKeys.splice(index, 1);
      }
    } else {
      expandedKeys.push(nodeKey);
    }

    this.tree.resetAndSliceTree();
  }
}

// 获取应该显示在页面上的个数
function getTotalDisplay() {
  const { nodesMap } = this;

  // 获取level为1的节点长度
  let len = this.root.childNodes.length;
  const keys = [];
  const pushKey = key => {
    if (!keys.includes(key) && nodesMap[key].level > 1) {
      keys.push(key);
    }
  };

  // 递归找出所有需要展开的key
  this.expandedKeys.forEach(key => {
    const show = this.judgeShow(nodesMap[key]);
    if (show) {
      pushKey(key);
      nodesMap[key].childNodes.forEach(node => {
        const show = this.judgeShow(node);
        show && pushKey(node.data[this.key]);
      });
    }
  });

  return len + keys.length;
}
```

### 难点二：如何将片段构建成一个片段树

```js
// 将拿到的树节点放入虚拟滚动树中
function setTreeNode(targetNode) {
  // 能否找到父级
  let canFindParent = false;
  const { childNodes } = this.virtualTree;
  const traverse = node => {
    const { childNodes } = node;
    // 找到父节点
    if (node === targetNode.parent) {
      canFindParent = true;
      const key = node.data[this.nodeKey];
      // 没有缓存过
      if (!this.store.childrenMap[key]) {
        // 缓存原节点数据
        this.store.childrenMap[key] = node.childNodes;
        node.childNodes = [];
      }

      node.childNodes.push(targetNode);
    }

    childNodes.forEach(traverse);
  };

  childNodes.forEach(traverse);
  // 找不到就直接推进去
  if (!canFindParent) {
    childNodes.push(targetNode);
  }

  this.releaseNodeLoad(childNodes);
}
```

### 难点三：滚动的实现和优化

```js
// 滚动事件
function handleScroll(ev) {
  if (!this.useVirtualScroll) return;
  const scrollTop = this.$el.scrollTop;

  if (scrollTop >= 0 && scrollTop + this.height <= this.totalHeight) {
    window.requestAnimationFrame(() => {
      this.updateVisibleArea(scrollTop);
    });
  }
}

// 更新可视区域
function updateVisibleArea(scrollTop) {
  this.start = this.getStartIndex(scrollTop);
  this.paddingTop = this.start > 0 ? this.start * this.itemHeight : 0;
  this.resetAndSliceTree();
}
```

## 优化

> 问题：虚拟滚动树保留了对 childNodes 的引用，因此在 el-tree 构建过程中，会去生成对应节点，节点太多会很卡

> 解决方案：在构建完成虚拟滚动树之后，卸载所有 childNodes，并存入 map 中，`{nodeId: childNodes}`，在初始化的时候重新挂载到完整树上

```js
function releaseNodeLoad(childNodes) {
  if (this.boxMaxNumber === this.counter || this.counter === this.totalDisplay) {
    const traverse = node => {
      const { childNodes, expanded, data } = node;
      if (!node.expanded) {
        const key = data[this.nodeKey];
        this.store.childrenMap[key] = childNodes;
        node.childNodes = [];
      }
      childNodes.forEach(traverse);
    };
    childNodes.forEach(traverse);
  }
}
```

## 完整流程

```
初始化相关的数值(resetVirtualTree) => 将树切片(sliceTree) => 将切出来的每个节点放入虚拟滚动树(setTreeNode) => 去除节点包袱(releaseNodeLoad)

mounted/data改变/展开/折叠/过滤文本/滚动 执行上述操作
```
