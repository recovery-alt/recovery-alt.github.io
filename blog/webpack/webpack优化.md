---
title: webpack优化
date: 2020-09-09
description: 记录webpack相关知识
disabled: true
readMins: 8
tags:
  - Webpack
---

## webpack 构建流程

- 初始化参数：从配置文件、Shell 命令中读取合并相关参数
- 初始化编译：使用上述的参数来实例化一个 Compiler 对象，注册插件并传入实例中
- 生成依赖图：从 entry 出发，调用所有配置的 loader 来对模块进行翻译，递归解析所有依赖，使用 AST 引擎生成抽象语法树(AST)
- seal 输出资源：根据入口和模块的依赖关系，组装成一个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这是能修改输出内容的最后机会
- emit 输出完成：确定输出文件路径和文件名，直接写入文件系统

## webpack 优化方案

### 查看 webpack 性能问题

- 使用`speed-measure-webpack-plugin`测量打包速度
- 使用`webpack-bundle-analyzer`进行体积分析

### 优化 Loader 配置

- 优化搜索时间
- 缩小文件搜索范围
- 减少不必要的编译工作

```js
module.exports = {
  module: {
    rules: [
      {
        // 如果项目源码中只有.js文件，就不要写成/\jsx?$/，以提升正则表达式的性能
        test: /\.js$/,
        // babel-loader支持缓存转换出的结果，通过cacheDirectory选项开启
        use: ['babel-loader?cacheDirectory'],
        // 只对src目录中的文件采用 babel-loader
        include: path.resolve(__dirname, 'src'),
        // 使用resolve.alias把原导入路径映射成一个新的导入路径，减少耗时的递归解析操作
        alias: {
          react: path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
        },
        // 让 Webpack 忽略对部分没采用模块化的文件的递归解析处理
        noParse: '/jquery|lodash/',
      },
    ],
  },
};
```

### DLL Plugin Or Externals

目的是在处理第三方库的时候尽量少的打包

- Externals 的使用方式是直接配置 Externals 选项，当 webpack 打包时，遇到所配置的 Externals，直接跳过
- DllPlugin 和 DllReferencePlugin
  - 新建一个 webpack 配置文件，用来构建第三方包
  - 配置 DllPlugin，传入 context、name 和 path，配置好打包的 output，运行一次打包
  - 在你的业务代码的配置文件中，配置 DllReferencePlugin，context、name、manifest 等

### 多进程

一些开销特别大的 loader 可以放进一个单独的线程中，但是会有一些限制，比如无法使用 loader 的 api，而且也拿不到 webpack 的配置项

- thread-loader(推荐使用)
- happypack(不怎么维护了)

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          'thread-loader',
          // your expensive loader (e.g babel-loader)
        ],
      },
    ],
  },
};
```

### 合理利用缓存

缓存可以解决除第一次打包之外的速度，效果比较明显的就是 hard-source-webpack-plugin

### Code Splitting(代码分割)

- 配置多 entry 页面
- 使用 SplitChunksPlugin 进行重复数据删除和提取
- 使用 Dynamic Import 指定模块拆分，并且可以结合 preload、prefetch 做更多用户体验上的优化

### noParse

对于某些没有第三方引用的包，可以使用 module.noParse 来提升构建速度

### IgnorePlugin

比如忽略 moment 的本地化内容

- requestRegExp 匹配(test)资源请求路径的正则表达式。
- contextRegExp （可选）匹配(test)资源上下文（目录）的正则表达式。

```js
new webpack.IgnorePlugin(requestRegExp, [contextRegExp]);

// 忽略 moment 的本地化内容
new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
```
