const path = require('path');
const fs = require('fs');
const vm = require('vm');

class MyModule {
  constructor(id) {
    this.id = id;
    this.path = path.dirname(id);
    this.exports = Object.create(null);
    this.filename = null;
    this.loaded = false;
  }

  require(id) {
    return MyModule._load(id);
  }

  load(filename) {
    const ext = path.extname(filename);
    MyModule._extensions[ext](this, filename);
    this.loaded = true;
  }

  compile(content, filename) {
    // 将函数包装到匿名函数
    const wrapper = MyModule._wrap(content);
    const compiledWrapper = vm.runInThisContext(wrapper, {
      filename,
      lineOffset: 0,
      displayErrors: true,
    });

    const dirname = path.dirname(filename);

    compiledWrapper.call(this.exports, this.exports, this.require, this, filename, dirname);
  }

  static _load(request) {
    const filename = MyModule._resolveFilename(request);

    // 检查缓存有没有，有的话直接读取
    const cachedModule = MyModule._cache[filename];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 缓存不存在，就实例化一个MyModule对象
    const module = new MyModule(filename);

    // 加载了就写入缓存
    MyModule._cache[filename] = module;

    // 实例的加载方法
    module.load(filename);

    return module.exports;
  }

  // 解析文件名为真正的文件地址
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

MyModule._extensions = {
  '.js': (module, filename) => {
    const content = fs.readFileSync(filename, 'utf8');
    module.compile(content, filename);
  },
  '.json': (module, filename) => {
    const content = fs.readFileSync(filename, 'utf8');
    module.exports = JSON.parse(content);
  },
};

MyModule._wrapper = ['(function (exports, require, module, __filename, __dirname) { ', '\n});'];

MyModule._wrap = script => {
  return MyModule._wrapper[0] + script + MyModule._wrapper[1];
};

// 缓存
MyModule._cache = Object.create(null);

const myModule = new MyModule('./module');

const a = myModule.require('./a.js');
const b = myModule.require('./b.js');

console.log(a);
console.log(b);
