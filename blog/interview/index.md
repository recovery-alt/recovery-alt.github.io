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
