---
title: 记录力扣日常
date: 2021-04-09
description: 记录自己的力扣之旅
readMins: 8
tags:
  - LeetCode
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

### 多数元素

[地址](https://leetcode-cn.com/problems/majority-element/description/)

- 思路一：hash table
  时间复杂度：O(n)
  空间复杂度：O(n)

- 思路二：打分法
  遍历，然后给每一个元素打分，等于 candidate 记为 1，不等于记为-1，`count===0`表示需要变更`candidate`
  核心思想就是多数是大于`n / 2`，所以通过消除法，最后剩余的肯定是最多的数

### 阶乘后的零

[地址](https://leetcode-cn.com/problems/factorial-trailing-zeroes/)

规律就是

- 每隔 5 个数出现一次 0，所以总数应该是 n / 5
- 但是每隔 25 个数又会额外多处一个 1 一个 0
- 每隔 625 个数又会额外多处一个 0
- 以此类推
- 总数 = n / 5 + n / 25 + n / 625 +++

### 颠倒二进制位

[地址](https://leetcode-cn.com/problems/reverse-bits/)

位运算符笔记

- \>\> 右移运算符，正数高位补 0，负数高位补 1 `111` => `11` `-111` => `11111111111111111111111111111100`
- \<\< 左移运算符，低位补 0 `111` => `1110`
- \>\>\> 无符号右移，高位补 0 `-111` => `11111111111111111111111111111000` => `01111111111111111111111111111100`

1. JavaScript 中数字存储格式是 64 位浮点数
2. JavaScript 中进行位运算的数字格式是 32 位二进制数
3. 负数的二进制写法是正数的二进制补码+1
4. 这种长位数作运算的时候会用 16 进制来表示，即四位变成一位，用 0x 作开头
5. toString(2)可以将十进制转换成二进制，带正负号。。

无符号右移 0 作用 [地址](https://www.jianshu.com/p/588eb74b5a03)

### 快乐数

[地址](https://leetcode-cn.com/problems/happy-number/description/)

- 思路一：哈希表，缓存所有值
- 思路二：可以理解为一个循环指针

### 计算质数

[地址](https://leetcode-cn.com/problems/count-primes/)

- 思路一：暴力法
- 思路二：依此遍历，如果 i 是质数，则 i 的 x 倍是合数，缓存结果减少计算

### 反转链表

[地址](https://leetcode-cn.com/problems/reverse-linked-list/)

- 思路一：迭代
- 思路二：递归，归的过程需要反转两个链表`head.next.next = head; head.next = null;`

### 汇总区间

[地址](https://leetcode-cn.com/problems/summary-ranges/)

读清楚题目，要求是连续就收起来，不连续就单独放
`0 1 2 4 5 7`
`0 1 2`连续 => `0->2`
`4 5` 连续 => `4->5`
`7` => `7`

### 2 的幂

[地址](https://leetcode-cn.com/problems/power-of-two/)

2 的幂满足二进制表示的时候只有一个 1，且在最高位
所以可以判断`n & (n - 1)`是否等于 0 来求解

### 回文链表

[地址](https://leetcode-cn.com/problems/palindrome-linked-list/)

- 思路一：转为数组，然后循环判断是否回文
- 思路二：快慢指针，找到中点并且反转前半部分 => 对比反转链表和剩余链表的值

### 二叉搜索树的最近公共祖先

[地址](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

- 思路一：先找到 p 和 q 节点的路径，再对比找到最后一个相等的节点就是高度最低的节点
- 思路二：如果 p 和 q 都当前节点小，`node = node.left`，如果都比当前节点大`node = node.right`，找到介于两者之间的值就是结果
- 思路三：递归实现思路二

### 各数相加

[地址](https://leetcode-cn.com/problems/add-digits/)

- 思路一：循环+递归
- 思路二：可以理解为除以 9 的余数

### 丑数

[地址](https://leetcode-cn.com/problems/ugly-number/)

1. 丑数大于 0
2. 丑数只能被 2、3、5 整除
3. 1 被视为丑数

### 丢失的数字

[地址](https://leetcode-cn.com/problems/missing-number/)

- 思路一：排序，然后对比下标和值
- 思路二：异或运算
- 思路三：求`0-n`的和，减去所有值的和就是结果

```
0 ^ 0 ^ 1 ^ 1 ^ 2 ^ 3 ^ 3 => 2
```

### 第一个错误的版本

[地址](https://leetcode-cn.com/problems/first-bad-version/)

二分求中位数

```js
const mid = Math.floor(start + (end - start) / 2);
```

### 移动零

[地址](https://leetcode-cn.com/problems/move-zeroes/)

- 思路一：计数器，遇到 0 就`counter++`，非 0 就`nums[i - couter] = nums[i] nums[i] = 0`
- 思路二：双指针，一个指针正常走，另一个遇到非 0 的值加一，并`nums[j++] = nums[i]`

### 比特位计数

[地址](https://leetcode-cn.com/problems/counting-bits/)

- 思路一：直接遍历，与 1 取并输出结果
- 思路二：dp，转移方程是`dp[i] = dp[i / 2] + (i & 1)`
- 思路三：dp，转移方程是`dp[i] = dp[i & (i - 1)] + 1`
- 思路四：
  - 奇数就等于前一个加一
  - 偶数就等于`i >> 1`

:::tip
这道题除了第一种思路，都是用一些方法来减少计算，中间有很多计算结果，可以避免重复计算
:::

### 4-的幂

[地址](https://leetcode-cn.com/problems/power-of-four/)

- 思路一：直接循环除以 4
- 思路二：4 的 n 次方取模 3 为 1，4 的 n 次方\*2 取模 3 为 2，所以通过取模可以得到结果
- 思路三：`n & n - 1`并且`n & 0xaaaaaaaa === 0`

### 两个数组的交集

[地址](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

- 思路一：暴力法+哈希表，直接`O(M*N)`
- 思路二：先排序，再双指针比较

### 找不同

[地址](https://leetcode-cn.com/problems/find-the-difference/)

- 思路一： 把其中一个转成哈希表
- 思路二：利用位运算符的异或运算，类似[只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

### 二进制手表

[地址](https://leetcode-cn.com/problems/binary-watch/)

- 枚举所有时间，即 12 小时 60 分钟，然后计算出其中二进制位为 1 的数量
- 枚举`2 ** 10`，取出高 4 位和低 6 位的值，分别计算是否在 12 和 60 以内

### 数字转换为十六进制数

[地址](https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/)

- 思路一：循环除以 16，取余数
- 思路二：使用位运算符

:::tip
遇到`2 ** n`问题，首先可以考虑位运算符，提升运算效率
:::

### 排列硬币

[地址](https://leetcode-cn.com/problems/arranging-coins/)

思路一：直接迭代，求前 m 项和，直到前 m 项和大于 n，就输出 n - 1
思路二：二分查找

### 找到所有数组中消失的数字

[地址](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)

两次遍历

- 第一次需要把原数组中需要剔除的数加上 len 的倍数
- 第二次只需要找出数组中小于 len 的索引并-1

### 重复的子字符串

[地址](https://leetcode-cn.com/problems/repeated-substring-pattern/)

- 暴力法，直接挨个比对，i 从 `1 => n / 2`，**比较难想到的是**对比`s[j]`和`s[j - i]`，
- 将字符串`s`自加`s + s`，然后判断字符串`s`的第 1 个索引`s.indexOf(s, 1)`是否与`s`的长度相等，相等则返回 false
- [KMP 算法](https://zhuanlan.zhihu.com/p/83334559)

### 岛屿的周长

[地址](https://leetcode-cn.com/problems/island-perimeter/)

- 思路一：直接遍历，然后推倒右侧/下侧是否为 1，是的话就-2
- 思路二：深度优先遍历(DFS)

### 提莫攻击

[地址](https://leetcode-cn.com/problems/teemo-attacking/)

关键点在于间隔时间是否大于持续时间，如果持续时间小于间隔就加上持续时间，反之则加上时间间隔，最后再加上持续时间

### 二叉搜索树中的众数

[地址](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)

- 思路一：直接深度优先遍历，存到 map，然后再排序，输出前几项一样大结果
- 思路二：中序遍历，然后记录连续的数，做一定判断
- 思路三： Morris 中序遍历

**Morris 核心思路**

- 如果当前节点没有左子树，则遍历这个点，然后跳转到当前节点的右子树。
- 如果当前节点有左子树，那么它的前驱节点一定在左子树上，我们可以在左子树上一直向右行走，找到当前点的前驱节点。
  - 如果前驱节点没有右子树，就将前驱节点的 right 指针指向当前节点。这一步是为了在遍历完前驱节点后能找到前驱节点的后继，也就是当前节点。
  - 如果前驱节点的右子树为当前节点，说明前驱节点已经被遍历过并被修改了 right 指针，这个时候我们重新将前驱的右孩子设置为空，遍历当前的点，然后跳转到当前节点的右子树。

```js
while (node) {
  // 左节点不存在，直接处理当前节点，然后指针移到右节点
  if (!node.left) {
    update(node.val);
    node = node.right;
    continue;
  }

  // 左节点存在，将pre指针指向左节点
  pre = node.left;
  // 一直向右走，找到前驱节点
  while (pre.right && pre.right !== node) {
    pre = pre.right;
  }

  // 如果前驱节点没有右节点，就把让前驱的right节点指向当前节点
  if (!pre.right) {
    pre.right = node;
    node = node.left;
  } else {
    // 恢复设置的节点
    pre.right = null;
    update(node.val);
    node = node.right;
  }
}
```

:::tip
遇到二叉搜索数，记得使用中序遍历，遍历的结果是一个有序数组
:::

## medium

### 格雷编码

[地址](https://leetcode-cn.com/problems/gray-code/)

思路一：加一 + 逆序 00 01 11 10 => 100 101 111 110 => 110 111 101 100
思路二：右移 + 与原数去亦或 110 => 111 => 001

## 常考题

```js
var subject = [
  '234 回文链表(简单)',
  '206 反转链表(简单)',
  '141 环形链表(简单)',
  '148 排序链表(中等)', // ??
  '160 相交链表(简单)',
  '5 最长回文子串(中等)',
  '14 最长公共前缀(简单)',
  '3 无重复字符的最长子串(中等)',
  '674 最长连续递增序列(简单)',
  '11 盛最多水的容器(中等)',
  '26 删除有序数组中的重复项(简单)',
  '560 和为 K 的子数组(中等)', // ?
  '1 两数之和(简单)',
  '167 两数之和 II - 输入有序数组(简单)',
  '15 三数之和(中等)',
  '18 四数之和(中等)',
  '55 跳跃游戏(中等)',
  '45 跳跃游戏 II(中等)',
  '236 二叉树的最近公共祖先(简单)',
  '700 二叉搜索树中的搜索(简单)',
  '450 删除二叉搜索树中的节点(中等)', // ?
  '222 完全二叉树的节点个数(中等)',
  '103 二叉树的锯齿形层序遍历(中等)',
  '452 用最少数量的箭引爆气球(中等)',
  '56 合并区间(中等)',
  '392 判断子序列(简单)',
  '34 在排序数组中查找元素的第一个和最后一个位置(中等)',
  '300 最长递增子序列(中等)',
  '322 零钱兑换(中等)', // ?
  '1143 最长公共子序列(中等)',
  '516 最长回文子序列(中等)',
  '53 最大子数组和(简单)',
  '121 买卖股票的最佳时机(简单)',
  '122 买卖股票的最佳时机 II(简单)',
  '309 最佳买卖股票时机含冷冻期(中等)',
  '714 买卖股票的最佳时机含手续费(中等)',
  '752 打开转盘锁(中等)', // ??
  '111 二叉树的最小深度(简单)',
  '155 最小栈(简单)',
  '496 下一个更大元素 I(简单)',
  '503 下一个更大元素 II(中等)',
  '20 有效的括号(中等)',
  '71 简化路径(中等)',
  '695 岛屿的最大面积(中等)',
  '100 相同的树(简单)',
  '46 全排列(中等)',
  '22 括号生成(中等)',
  '93 复原 IP 地址(中等)', // ?
  '78 子集(中等)',
];
```
