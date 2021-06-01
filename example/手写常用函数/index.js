Function.prototype.myCall = function () {
  if (typeof this !== 'function') {
    throw new TypeError('caller is not a function');
  }
  const _this = arguments[0] || window;
  const symbol = Symbol();

  _this[symbol] = this;
  const args = [...arguments].slice(1);
  const res = _this[symbol](...args);
  delete res[symbol];
  return res;
};

// function sum(a) {
//   return this.a + a;
// }

// const b = sum.myCall(null, 1);

// console.log(b);

Function.prototype.myApply = function (_this, args) {
  if (typeof this !== 'function') {
    throw new TypeError('caller is not a function');
  }

  _this = _this || window;
  const symbol = Symbol();

  _this[symbol] = this;
  const res = _this[symbol](...args);
  delete res[symbol];
  return res;
};

// function sum(a) {
//   return this.a + a;
// }

// const b = sum.myApply(null, [1]);

// console.log(b);

Function.prototype.bind = function (otherThis) {
  const slice = Array.prototype.slice;
  if (typeof this !== 'function') {
    throw new TypeError('caller is not a function');
  }

  var baseArgs = slice.call(arguments, 1),
    baseArgsLength = baseArgs.length,
    fToBind = this,
    fNOP = function () {},
    fBound = function () {
      baseArgs.length = baseArgsLength;
      baseArgs.push.apply(baseArgs, arguments);
      return fToBind.apply(fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs);
    };

  // 实现原型继承
  if (this.prototype) {
    fNOP.prototype = this.prototype;
  }
  fBound.prototype = new fNOP();

  return fBound;
};

function New(Fn, ...args) {
  if (typeof Fn !== 'function') {
    throw new TypeError('caller is not a function');
  }
  const obj = {};
  obj.__proto__ = Fn.prototype;
  const res = Fn.apply(obj, args);
  return typeof res === 'object' ? res : obj;
}

// function A(a) {
//   this.a = a;
// }

// var a = New(A, 1);
// console.log(a);

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i));
  }
  return result;
};

// var a = [1, 2];
// var b = a.myMap((item, index) => {
//   console.log(`item: ${item}`);
//   console.log(`index: ${index}`);
//   return item;
// });

// console.log(b);

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};

// var a = [1, 2];
// var b = a.myForEach((item, index) => {
//   console.log(`item: ${item}`);
//   console.log(`index: ${index}`);
//   return item;
// });

// console.log(b);

function debounce(fn, wait = 500) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait, ...arguments);
  };
}

// window.addEventListener('scroll', debounce((e) => {
//   console.log(e);
// }))

function throttle(fn, wait = 500) {
  let prev = Date.now();
  return function () {
    const now = Date.now();
    if (now - prev >= wait) {
      fn.call(this, ...arguments);
      // 触发之后，需要重置初始时间
      prev = Date.now();
    }
  };
}

// window.addEventListener('scroll', throttle((e) => {
//   console.log(e);
// }))

// 浅拷贝
function shallowClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('param is not object type');
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = value;
  }
  return result;
}

// const obj = { a: 1, b: { c: 2 } };
// const obj2 = shallowClone(obj);
// obj.b.c = 3;
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj2));

// 深拷贝
function deepClone(obj, map = new WeakMap()) {
  // 包括了Date、RegExp、Array
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  const strategy = {
    Date: obj => new Date(obj),
    RegExp: obj => new RegExp(obj),
    Object: clone,
    Array: clone,
  };
  function clone(obj) {
    // 防止循环引用
    if (map.get(obj)) {
      return map.get(obj);
    }
    // 继承原型
    let target = new obj.constructor();
    map.set(obj, target);
    for (const [key, value] of Object.entries(obj)) {
      // 排除原型链上的属性
      if (obj.hasOwnProperty(key)) {
        target[key] = deepClone(value, map);
      }
    }
    return target;
  }

  return strategy[type] && strategy[type](obj);
}

// const obj = { a: 1, b: { c: 2 } };
// const obj2 = deepClone(obj);
// obj.b.c = 3;
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj2));

// 柯里化
function createCurry(fn, args) {
  // 最开始fn的形参的长度
  var arity = fn.length;
  args = args || [];
  return function () {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(_args, args);
    if (_args.length < arity) {
      return createCurry.call(this, fn, _args);
    }

    return fn.apply(this, _args);
  };
}

// function add(a, b ,c ,d) {
//   return a + b + c + d;
// }

// var _add = createCurry(add);
// console.log(_add(1, 2)(3)(4));

// Object.create
Object.myCreate = function (proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object: ' + proto);
  } else if (proto === null) {
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
    );
  }

  if (typeof propertiesObject !== 'undefined')
    throw new Error(
      "This browser's implementation of Object.create is a shim and doesn't support a second argument."
    );

  function F() {}
  F.prototype = proto;

  return new F();
};

var a = Object.myCreate(null);
console.log(a);
