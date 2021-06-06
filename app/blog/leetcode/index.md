---
title: 记录力扣日常
date: 2021-04-09
sidebar: 'auto'
categories:
  - leetcode
tags:
  - leetcode
---

## easy

### 罗马文字解析

[地址](https://leetcode-cn.com/problems/roman-to-integer/)

> 当前数字小于后一个的值时，后一个值减去前一个值，i++

```js
if (val < map[s[i + 1]]) {
  val = map[s[i + 1]] - val;
  i++;
}
```

### 最长公共前缀

[地址](https://leetcode-cn.com/problems/longest-common-prefix/solution/)

- 先遍历一次拿长度最短的
- 再遍历比较遇到值不对的直接跳出，并截取公共串

```js
if (demo[j] !== str[j]) {
  demo = demo.slice(0, j);
  break;
}
```

更好的思路

- 取第一个为参照
- 依次去对比所有项中对应的字符
- 遇到不同退出循环，记录第一个参照此时的索引

```js
while (j < len) {
  if (nowChar !== strs[j][i]) {
    flag = true;
    break;
  }
  j++;
}
if (flag) break;
```

### 有效的括号

[地址](https://leetcode-cn.com/problems/valid-parentheses/)

> 优化思路，这种找对应关系的题目，可以通过取余来判断

```js
if (len % 2 !== 0) return false;
```

### 合并两个有序链表

[地址](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

思路一：

- 用一个结果链表装载结果
- 每次移动 l1/l2 中的较小值的那个指针
- 将结果指针指向较小值的那个节点
- 后移较小值的指针和结果链表的指针

```js
var mergeTwoLists = function (l1, l2) {
  const prevHead = new ListNode();
  let prevNode = prevHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prevNode.next = l1;
      l1 = l1.next;
    } else {
      prevNode.next = l2;
      l2 = l2.next;
    }
    prevNode = prevNode.next;
  }
  prevNode.next = l1 || l2;
  return prevHead.next;
};
```

思路二：

- 将结果集由 l1/l2 输出
- 通过移动 l1/l2 的指针不断递归

```js
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
```

### 删除有序数组中的重复项

[地址](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

> 1. 不能使用额外空间
> 2. 不需要处理之后的元素

- 用两个指针，`i=1`、`j=0`，`i`是遍历的指针，`j`是输出集的指针
- `nums[i] !== nums[i - 1]`，`j++`，并且`nums[j] = nums[i]`

```js
if (nums[i] !== nums[i - 1]) {
  j++;
  nums[j] = nums[i];
}
i++;
```

### 实现 strStr()

[地址](https://leetcode-cn.com/problems/implement-strstr/solution/)

- 比较长度，仅在前者长度大于后者进行遍历
- 遍历长度为`len1 - len2 + 1`
- 不相等直接退出内部循环

```js
for (let i = 0; i < diff + 1; i++) {
    let equal = true;
    for (let j = 0; j < len2; j++) {
      if (haystack[i + j] !== needle[j]) {
        equal = false;
        break;
      }
    }

    if (equal) return i;
```

### 外观数列

[地址](https://leetcode-cn.com/problems/count-and-say/)

思路一：正则表达式

```js
start = start.replace(/(\d)\1*/g, matcher => `${matcher.length}${matcher[0]}`);
```

### 最大子序和

[地址](https://leetcode-cn.com/problems/maximum-subarray/)

思路一：动态规划

```js
// 转移方程
f(i) = Math.max(f(i - 1) + nums[i], nums[i]);
```

1. 前 i 项的最大值 = 前 i-1 项最大值 + 第 i 项 和 第 i 项的最大值
2. 保留每次计算的前 i 项的和和前 i 项的最大值
3. 取其中的最大值

### 最后一个单词的长度

[地址](https://leetcode-cn.com/problems/length-of-last-word/)
思路从右往左遍历，先去除所有空格，再计算长度，再次遇到空格或者 i=0 输出结果

### x 的平方根

[地址](https://leetcode-cn.com/problems/sqrtx/)
二分查找,对比`mid * mid`和`x`的大小，`mid * mid < x`

### 合并两个有序数组

[地址](https://leetcode-cn.com/problems/merge-sorted-array/)
双指针法
从前往后遍历需要额外的空间
时间复杂度：O(m+n)
空间复杂度：O(m+n)

优化思路
从后往前遍历，因为后面都是 0，不会出现覆盖的问题
时间复杂度：O(m+n)
空间复杂度：O(1)

### 只出现一次的数字

[地址](https://leetcode-cn.com/problems/single-number/)
使用异或运算符`^`，具备以下特点

- `a ^ 0 === a`
- `a ^ a === 0`
- `a ^ b ^ a === b`

### 相交链表

[地址](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/)

双指针法

```
p1: headA => headA End => headB => node
p2: headB => headB End => headA => node
如果相交的话，则满足：
a + (b - c) = b + (a - c)
```
