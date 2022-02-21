---
title: 面经
date: 2020-09-16
description: 记录自己的面试之旅
disabled: true
readMins: 8
tags:
  - interview
---

## 字节

### 一面

- 常用选择器
- 如何管理代码中的选择器的嵌套
- 嵌套过多会有什么问题
- cookie 安全隐患
- 你做过的性能优化
- vuex 的理解
- raf 的调用机制
- 如何让代理 focus/blur
- 手写 lodash.get()
- js 如何处理 64 位的数字

### 二面

- TCP/UDP 区别
- 数组和链表的区别以及优缺点
- 孤岛算法题
- 手写 Promise.all

### 三面

- 七层网络模型
- 输入 url 到显示页面的过程
- 二叉查找树是什么，如何从小到大输出
- 数组转成二叉查找树再顺序输出
- 缓存的目的是什么？什么场景需要使用缓存

## 智云

### 一面

- flex 布局
- 原型链
- diff 算法
- 执行上下文的概念
- 计算属性的实现
- watch 函数
- vuex 的理解
- vue-router 的原理
- 浏览器缓存机制

### 二面

- 父子组件的生命周期 （父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子 beforeMount->子 mounted->父 mounted）
- 手写 new
- 手写深拷贝
- vue 如何处理数组的问题
- defineProperty 的参数
- Proxy 的参数
- WeakMap 和 Map 的区别

### 三面

- 变量作用域的查找
- v-model 的实现，以及如何在组件中使用 v-model（使用 prop 接收，再 this.\$parent.value 赋值）
- 手写节流函数

## 微店

- Object.create 方法
- 浅拷贝
- vue 监听数组的处理
- diff 算法
- 原型链继承的优缺点（子类没有属于自己的方法，共用父类方法）

## 欢聚时代

### 一面

- csrf/xss 异同
- 浏览器缓存机制

## 滴滴

### 一面

- html 为什么会忽略空白，文本换行问题怎么处理，有一个 css 属性控制(white-space)
- 手写动态拼接 script
- 对象解析为 key=value 的格式
- 手写 Promise.all

## e 签宝

### 一面

- watch 原理
- qiankun 原理
- webpack 流程
- 循环依赖
- 根据注释生成文档实现思路
- babel 流程
- 如何帮助组员成长
- 架构一个 npm 包需要考虑哪些

## 政采云

### 一面

- 箭头函数 this 指向
- diff 的过程
- 如何冻结一个对象
- 换肤的时候有没有考虑使用构建工具解决
- 如何控制包的版本
- 实现一个最高并发量为 10 的 Promise 队列
- 在项目有突发情况（未按时、重难点无法解决等）的时候如何去解决
- 如何控制代码质量

### 二面

- vue 如何代理数组
- qiankun 和 Single-spa 原理
- 如何帮助同事成长

## 钉钉

### 一面

- 个人公司经历以及离职原因
- 现在做的项目展示之类的
- 项目内的技术难点
- 展示自己的作品
- 算法题 数字转千分位展示
- 算法题 版本比较

## 微策略

### 笔试

- 全英文笔试题(10 道选择题 + 3 道算法题)
- 选择题主要是基于 java 的，还有一些算法数据结构
- 二叉搜索树会否存在目标值
- 字符串前缀是否相等
- 反转链表

## 得物

### 笔试

#### 第一题

```js
// 实现一个 arrange 函数，可以进行时间和工作调度
// arrange('William').execute();
// > William is notified

// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待 5 秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute();
// 等待 5 秒
// > William is notified
// > Start to push

function arrange(name) {
  this.promises = [];
  this.promises.push(Promise.resolve(`${name} is notified`));

  this.do = function (todo) {
    this.promises.push(Promise.resolve(`Start to ${todo}`));

    return this;
  };

  function genWaitPromise(second) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`等待${second}秒`);
      }, second * 1000);
    });
  }

  this.wait = function (second) {
    this.promises.push(genWaitPromise(second));

    return this;
  };

  this.waitFirst = function (second) {
    this.promises.unshift(genWaitPromise(second));

    return this;
  };

  this.execute = async function () {
    const len = this.promises.length;
    let i = 0;

    while (i < len) {
      const res = await this.promises[i];
      console.log(res);
      i++;
    }
  };

  return this;
}
```

#### 第二题

```js
// 扁平数据转树形结构
function buildTree(arr) {
  const len = arr.length;
  const res = [];
  const map = {};
  const notFoundMap = {};

  for (let i = 0; i < len; i++) {
    const { id, parentId, ...rest } = arr[i];

    let parent;
    const node = { id, parentId, ...rest, children: [] };

    map[id] = node;

    if (parentId && map[parentId]) {
      parent = map[parentId];
      res.push(parent);
    } else {
      if (notFoundMap[parentId]) {
        parent = notFoundMap[parentId];
      } else {
        parent = { children: [] };
        notFoundMap[parentId] = parent;
      }
    }

    if (notFoundMap[id]) {
      node.children = notFoundMap[id];
      const index = res.indexOf(notFoundMap[id]);
      res.splice(index, 1);
      delete notFoundMap[id];
    }

    parent.children.push(node);
  }

  Object.entries(notFoundMap).forEach(([key, item]) => {
    // 需要排除parentId不存在的情况
    if (key !== 'undefined') res.push(...item.children);
  });

  return res;
}
```

### 第三题

```js
// 实环一个异步任务处理区数，区数第一个参数 asyncTasks 代表需要处理的任务列表
// 第一个参数 n 代表可么同的发起的任务数。所有任务完成后把处理结果按顺序放在数组里返回
// 1s
// > resolve task 1
// 1s
// > resolve task 2 // 1s
// > resolve task 3
const asyncTask1 = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('resolve task 1');
      resolve();
    }, 1000)
  );
const asyncTask2 = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('resolve task 2');
      resolve();
    }, 2000)
  );
const asyncTask3 = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('resolve task 3');
      resolve();
    }, 2000)
  );
const asyncTasks = [asyncTask1, asyncTask2, asyncTask3];
handleAsyncTasks(asyncTasks, 2);

async function handleAsyncTasks(asyncTasks, n) {
  const len = asyncTasks.length;
  let i = 0;
  let j = 0;

  while (j < len) {
    while (i < n) {
      await asyncTasks[j]();
      j++;
      if (j === len) break;
    }
  }
}
```

#### 第四题

```js
// 力扣 40 题 组合总数 II
function getAllArrays(array, value) {
  array.sort((a, b) => a - b);
  const len = array.length;
  const result = [];

  // 深度优先遍历 + 循环
  function dfs(pos, value, path) {
    if (value === 0) {
      result.push(path);
      return;
    }

    for (let i = pos; i < len; i++) {
      const item = array[i];

      // 如果超过了value直接break
      if (value < item) break;
      // 如果不是第一个，并且和前一个相同则表示
      if (i > pos && item === array[i - 1]) continue;
      dfs(i + 1, value - item, [...path, item]);
    }
  }

  dfs(0, value, []);

  return result;
}
```
