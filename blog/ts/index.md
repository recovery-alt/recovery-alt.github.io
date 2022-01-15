---
title: ts知识点
date: 2021-10-11
description: 记录ts知识点
disabled: true
readMins: 8
tags:
  - TypeScript
---

## type 和 interface 的区别

- type 可以为任何类型引入名称。例如基本类型，联合类型等
- type 不支持继承
- type 不会创建一个真正的名字
- type 无法被实现(implements)，而接口可以被派生类实现
- type 重名时编译器会抛出错误，接口重名时会产生合并
