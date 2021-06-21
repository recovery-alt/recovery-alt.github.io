---
title: js模块化
date: 2020-09-04
sidebar: 'auto'
categories:
  - JavaScript
tags:
  - JavaScript
---

## 前端模块化方案

`javascript`在发展之初，并未考虑到模块化，Brendan Eich 仅仅花了 10 天就设计出了这款语言，目的就是为了能让网页完成一些简单的操作，比如用户有没有填写表单之类的，但是随着时代的发展，浏览器的地位越来越重要，语言本身暴露出来的问题越来越多，其中较为头疼的就是模块化。不能模块化的问题有哪些：

- 充斥着各种全局变量，在使用完不进行回收的话，会占用较多内存
- 全局变量相互牵制，命名容易出现重名导致未知问题

### 解决方案

- 以 script 文件为模块
- 立即执行函数
- AMD(Asynchronous Module Definition)
- CMD(Common Module Definition)
- CommonJS
- ESModule
- webpack

## 以 script 文件为模块

优点：

- 不用将所有代码写在一个文件里面
- 可以复用一些代码

缺点：全局变量混乱的问题并未解决

## 立即执行函数

因为 js 每一个函数都拥有属于自己的执行上下文，所以可以利用这个特点，创建一个封闭的环境，来隔绝环境内的变量，内部的变量可以通过挂载到 window 上来进行导出

```js
(function (window) {
  var a = 1;
  var b = 2;
  window.b = b;
})(window);

console.log(a); // 报错 a is not defined
console.log(b); // 2
```

## AMD(Asynchronous Module Definition)

异步模块定义，是用来实现模块的异步加载，合理管理模块之间的依赖性。requirejs 遵循一个原则：一个文件就是一个模块，它推崇的是**依赖前置**，即在 require 的时候就需要加载对应的模块，核心函数有三个：

- require
- define
- require.config

当你需要引入一个模块的时候，可以这么写：

```js
// 第一个参数为一个数组，路径是以入口文件相对的路径，在本模块依赖的其他模块的路径
// 第二个参数为一个回调函数，回调函数的参数分别是数组里面的模块的一个引用
require(['moduleA', 'moduleB'], function (moduleA, moduleB) {
  // moduleA 和 moduleB 的引用
});
```

如果需要定义一个模块，可以这么写：

```js
// 第一个参数为一个数组，和require一样
// 第二个参数为一个回调函数，和require一样，区别在于定义模块的时候需要有一个返回值用于模块的导出
define(['moduleA'], function (moduleA) {
  const exports = {};
  return exports;
});
```

如果需要对 require 进行配置，可以使用 require.config 函数，require.config 函数接受一个对象作为参数。

```js
require.config({
  // 修改入口文件的相对路径./为./lib
  baseUrl: 'lib',
  // 默认引入一些模块
  paths: {
    jquery: 'jquery.min',
  },
  // 对于不基于amd规范的模块一个垫片
  // deps: 是该模块的依赖
  // exports: 输出的变量名，表明模块外部调用时的名称
  shim: {
    'jquery.scroll': {
      deps: ['jquery'],
      exports: 'jQuery.fn.scroll',
    },
  },
});
```

## CMD(Common Module Definition)

CMD 规范最具代表的框架就是 seajs，它推崇**依赖就近**，既需要使用的时候才会去加载依赖，全局只暴露一个函数 define，个人理解它是 requirejs 衍生出来的一个规范，或者说是对 requirejs 的一个优化，define 可以接受一个回调函数也可以接受一个变量。

### define `define('a')`

如果是一个变量，表示模块导出之后就是该变量的值。

### define `define(factory)`

如果为一个函数，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。

```js
define(function (require, exports, module) {
  // 模块代码
});
```

### define 接受多个参数 `define(id?, deps?, factory)`

- id: 模块标识（可省略）
- deps: 模块依赖（可省略）
- factory: 模块的构造方法

**注意：**带 id 和 deps 参数的 define 用法不属于 CMD 规范，而属于 Modules/Transport 规范。

### define.cmd

用来判断当前页面是否有 CMD 模块加载器，是一个空对象

```js
if (typeof define === 'function' && define.cmd) {
  // 有 Sea.js 等 CMD 模块加载器存在
}
```

### require(id)

require 是 factory 的第一个参数，他接受一个[模块标识](https://github.com/seajs/seajs/issues/258)作为入参，模块标识必须遵循以下规范：

- 一个模块标识由斜线（/）分隔的多项组成。
- 每一项必须是小驼峰字符串、 . 或 .. 。
- 模块标识可以不包含文件后缀名，比如 .js 。
- 模块标识可以是 相对 或 顶级 标识。如果第一项是 . 或 ..，则该模块标识是相对标识。
- 顶级标识根据模块系统的基础路径来解析。
- 相对标识相对 require 所在模块的路径来解析。

```js
define(function (require, exports) {
  // 引入模块表示为'./a'的模块，就近依赖不需要在执行define函数中声明所需的依赖
  const a = require('./a');
});
```

### exports

exports 是 factory 函数的第二个参数，它是一个对象，是用来导出模块的，需要注意的是 exports 只是对 module.exports 的一个引用，如果直接对 exports 进行赋值，是无法进行导出的。

```js
define(function (require, exports) {
  // 导出{a: 'a'}对象
  exports.a = 'a';

  // exports = module.exports => exports = 'a'
  // 引用失效，无法导出
  exports = 'a';

  // 或者可以直接return，也可以正常导出
  return { a: 1 };
});
```

### module

module 是 factory 函数的第三个参数，他是一个对象，里面报错了当前模块的 id、url、dependencies、exports

- id: 模块唯一标识
- url: 模块的绝对路径
- dependencies: 是一个数组，当前模块的依赖
- exports: 对外导出的内容

## CommonJS

CommonJS 是 node 所采用的模块管理机制，每个文件算一个模块，并且拥有独立的作用域，形成自己独立的执行上下文，其实现思路是基于 amd 和 cmd 规范的。而且不适用浏览器，因为他的实现高度依赖 node 的文件模块。总结一下就是：

- 每个文件是一个模块，拥有独立作用域。
- 依赖 node 的原生模块，不适用于浏览器。
- 模块是同步加载，执行顺序按照代码顺序进行。
- 对依赖的模块会进行缓存，第一次引入模块的时候，会执行模块内代码，缓存之后直接取导出的结果，不会再执行。

```js
// add.js
// 导出一个函数模块
module.exports = function (a, b) {
  return a + b;
};

// main.js
// 引入add模块
const add = require('./add');
const sum = add(1, 2);
console.log(sum); // 3
```

**注意：** module 和 require 并不是全局函数，暴露到全局的只有一个函数 Module。

### Module 函数

node 内部提供一个 Module 函数，所有的模块都是 Module 的实例。上文所说的 module 就是 Module 的一个实例，require 函数只是 Module 的一个沙箱里面一个参数，最终会执行 Mudule 的 require 函数。

```js
function Module(id = '') {
  this.id = id; // 这个id其实就是我们require的路径
  this.path = path.dirname(id); // path是Node.js内置模块，用它来获取传入参数对应的文件夹路径
  this.exports = {}; // 导出的东西放这里，初始化为空对象
  this.filename = null; // 模块对应的文件名
  this.loaded = false; // loaded用来标识当前模块是否已经加载
}
```

可以看到 Module 只是一个普通的函数，接下来我们来实现一个属于自己的 Module 类

### 手动实现 MyModule 类

都 0202 年了，就直接上 class 吧，ps: 虽然[源代码](https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js)里面用的是 function 的写法。

#### 构造一个 MyModule 类

```js
class MyModule {
  constructor(id) {
    this.id = id;
    this.path = path.dirname(id);
    this.exports = Object.create(null);
    this.filename = null;
    this.loaded = false;
  }
}
```

:::tip
注意：构造函数里的 path 是需要引入的，是 node 原生的 path 模块
:::

#### 添加实例方法 require

```js
class MyModule {
  require(id) {
    // 交给静态方法来处理
    return MyModule._load(id);
  }

  static _load(request) {
    // 此处为require的真正实现
  }
}
```

#### MyModule.\_load

该方法主要用来两件事情：

- 查看缓存中是否存在当前模块，有的话就直接读取缓存。
- 没有缓存的话，就新建一个 MyModule 实例来加载对应模块，并且写入缓存。

```js
class MyModule {
  // 创建一个没有继承原型的空对象用于缓存模块
  static _cache = Object.create(null);
  static _load(request) {
    // 将request解析对应的路径
    const filename = MyModule._resolveFilename(request);

    const cacheModule = MyModule._cache[filename];

    // 如果存在缓存，直接从缓存读取
    if (cacheModule !== undefined) {
      return cacheModule.exports;
    }

    // 如果不存在，就新建一个MyModule实例
    const module = new MyModule(filename);

    // 写入缓存
    MyModule._cache[filename] = module;

    // 加载模块，该方法是一个实例方法，用来加载一个新模块
    module.load(filename);

    return module.exports;
  }
}
```

#### MyModule.\_resolveFilename

- 先获取文件的绝对路径
- 获取文件后缀名
- 如果没有后缀就尝试加上后缀，比如.js .json 等等
- 加上扩展名可以找到对应文件的时候，调用 MyModule.\_extensions 里面对应的方法来处理对应的扩展

```js
class MyModule {
  // 对应扩展的处理方法（策略模式）
  static _extensions = {
    '.js': (module, filename) => {},
    '.json': (module, filename) => {},
  };

  static _resolveFilename(request) {
    // 获取绝对路径
    const filename = path.resolve(request);
    // 获取文件后缀名
    const extname = path.extname(request);

    // 如果没有文件后缀，就尝试加上.js和.json
    if (!extname) {
      for (const [key, value] of Object.entries(MyModule._extensions)) {
        const currentPath = filename + key;
        if (fs.existsSync(currentPath)) {
          return currentPath;
        }
      }
    }
    return filename;
  }
}
```

#### MyModule.prototype.load

该方法用来加载一个新的模块，找到对应的扩展名，调用对应的方法。

```js
class MyModule {
  static _extensions = {
    '.js': (module, filename) => {
      // js扩展的实现
    },
    '.json': (module, filename) => {
      const content = fs.readFileSync(filename, 'utf8');
      module.exports = JSON.parse(content);
    },
  };

  load(filename) {
    // 获取找到的文件的扩展
    const ext = path.extname(filename);

    // 使用策略模式来调用对应扩展的方法
    MyModule._extensions[ext](this, filename);

    // 打上已加载的标记
    this.loaded = true;
  }
}
```

#### MyModule.\_extensions['.js']

加载.js 文件的时候，需要先执行一次，执行的时候，避免污染全局变量，需要将其包裹在一个独立的执行上下文

```js
class MyModule {
  static _extensions = {
    '.js': (module, filename) => {
      const content = fs.readFileSync(filename, 'utf8');
      // 交给实例方法compile处理
      module.compile(content, filename);
    },
  };

  static _wrapper = ['(function (exports, require, module, __filename, __dirname) { ', '\n});'];

  // 包裹一层匿名函数
  static _wrap(script) {
    return MyModule._wrapper[0] + script + MyModule._wrapper[1];
  }

  compile(content, filename) {
    // 获取包裹之后的函数字符串
    const wrapper = MyModule._wrap(content);

    // vm是V8虚拟机的沙盒模块，runInThisContext可以将一个字符串转换为一个函数
    const compiledWrapper = vm.runInThisContext(wrapper, {
      filename,
      lineOffset: 0,
      displayErrors: true,
    });

    // 获取模块所在的文件夹的绝对路径
    const dirname = path.dirname(filename);

    // 这里就是准备我们在模块内可以使用的一些变量和函数
    // exports: 对module.exports的引用
    // require: 加载函数的入口
    // this: 此处的this指的是该模块的实例，即module
    // filename: 对应文件的绝对路径 __filename
    // dirname: 对应文件的所处文件夹的绝对路径 __dirname
    compiledWrapper.apply(this.exports, [this.exports, this.require, this, filename, dirname]);
  }
}
```

### 循环引用

至此，一个属于我们自己的 MyModule 类构造完成，但是假象一下，你在 a.js 中`require('./b.js')`，然后再在 b.js 中`require('./a.js')`，是不是会有一种循环引用的情况？

```js
// a.js
console.log('a start');

module.exports = 'a';

const b = require('./b');

console.log('在 a 中，b = %j', b);

module.exports = 'aa';

console.log('a end');
```

```js
// b.js
console.log('b start');

module.exports = 'b';

const a = require('./a');

console.log('在 b 中，a = %j', a);

module.exports = 'bb';

console.log('b end');
```

```js
main.js;
const myModule = new MyModule('./main');

const a = myModule.require('./a');
const b = myModule.require('./b');

console.log(a);
console.log(b);
```

其输出结果如下：

- a start
- b start
- 在 b 中，a = "a"
- b end
- 在 a 中，b = "bb"
- a end
- aa
- bb
  :::tip
  可以看到在 b 中 require 的 a 为"a"，在 a 中的 require b 的时候不会再去执行 b 模块的代码，因为之前已经加载过了，所以直接读取的缓存，在\_load 里面是有做处理的。
  :::

## ESModule

ESModule 解析模块分三步走：

- Construction(构造)
  - 找出包含此模块的下载地址（模块解析）
  - 从 url 或者文件系统中请求该文件
  - 将该文件转换为一条模块记录
- Instantiation(实例化)
  - js 引擎创建一个 module environment record(模块环境记录)，个人理解是用来装模块变量引用的
  - 确定每一个变量名，并不会进行传值，但是使用 function 的话会就进行传值，类似于执行上下文的初始化阶段
  - 确定每个 export 和 import 的引用指向同一块内存地址（所谓的动态绑定）
- Evaluation(执行)
  - 将所有模块变量填充到内存里面
  - 并写入缓存，防止循环引用

## webpack

大家写代码的时候可能会遇到一些这样子的写法：

```js
const a = require('./a').default;
```

这是因为 webpack 自己实现了一套模块化加载机制，兼容 ESModule 和 CommonJS 规范，你可以通过 import/export 来管理模块，也可以通过 module.exports 来管理模块。在最终加载的时候都会被替换成`__webpack_require__`，所以当你以 ESModule 导出一个模块的时候，再用 CommonJS 来引入的时候就会出现这种问题。

```js
// a.js
const a = 1;
export default a;
```

```js
// main.js 等价于 import a from 'a.js';
const a = require('a.js').default;
```

## 参考文档

- [JavaScript 模块化编程（三）：require.js 的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
- [seajs 官方文档](https://seajs.github.io/seajs/docs/#intro)
- [JavaScript 模块化规范（CommonJs AMD CMD UMD ES6）](https://juejin.im/post/6844904029454073864#heading-8)
- [JavaScript 标准参考教程（alpha）](https://javascript.ruanyifeng.com/nodejs/module.html#toc0)
- [深入 Node.js 的模块加载机制，手写 require 函数](https://juejin.im/post/6866973719634542606#heading-16)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
