---
title: 手写Promise
date: 2020-07-16
sidebar: 'auto'
categories:
  - JavaScript
tags:
  - JavaScript
---

## 先做一道题

:::tip
有关于 js 运行机制的一道题：
:::

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end');
```

## 构造一个 MyPromise 类

包含`status`、`value`、`reason`、`then`

- `status`有三个状态`pending`、`fulfilled`、`rejected`
- `value`指的是状态变更为 fulfilled 的时候，输出到 then 的回调函数里面的值
- `reason`同上，指的是`rejected`的时候，输出到 then 的第二个回调函数的值
- `then`参数有两个`onFulfilled`、`onRejected`，分别是状态变更为`fulfilled`、`rejected`的回调

:::tip
需要实现的效果如下：
:::

```js
new MyPromise((resolve, reject) => {
  resolve('mock data');
}).then(res => {
  // 打印mock data
  console.log(res);
});
```

实现代码如下：

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
  status;
  reason;
  value;
  constructor(executor) {
    this.status = PENDING;
    // 成功回调
    const resolve = res => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = res;
      }
    };
    // 失败回调
    const reject = err => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = err;
      }
    };
    executor(resolve, reject);
  }

  // then函数
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}
```

## 支持异步

::: tip
需要实现的效果如下：
:::

```js
new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('mock data');
  }, 1000);
}).then(res => {
  // 1s后打印mock data
  console.log(res);
});
```

思路就是在类里面使用两个数组`thenArr`、`catchArr`来存放 then 里面的回调，等到异步任务结束之后变更了`status`，触发`resolve`或者`reject`函数，再统一调用

::: tip
在类里面初始化数组
:::

```diff
+ thenArr = [];
+ catchArr = [];
```

::: tip
在 then 函数里做 pending 状态的判断
:::
then 函数修改如下:

```js
then(onFulfilled, onRejected) {
  if (this.status === FULFILLED) {
    this.thenArr.push(() => {
      onFulfilled(this.value);
    });
  }

  if (this.status === REJECTED) {
    this.catchArr.push(() => {
      onRejected(this.reason);
    });
  }

  // 新增pending状态
  if (this.status === PENDING) {
    this.thenArr.push(() => {
      onFulfilled(this.value);
    });

    this.catchArr.push(() => {
      onRejected(this.reason);
    });
  }
}
```

::: tip
在`resolve`和`reject`中统一调用
:::

```js
// 成功回调
const resolve = res => {
  if (this.status === PENDING) {
    this.status = FULFILLED;
    this.value = res;
    // 如果是同步函数的话，包装成异步
    setTimeout(() => {
      this.thenArr.forEach(fn => fn());
    }, 0);
  }
};

// 失败回调
const reject = err => {
  if (this.status === PENDING) {
    this.status = REJECTED;
    this.reason = err;
    // 如果是同步函数的话，包装成异步
    setTimeout(() => {
      this.catchArr.forEach(fn => fn());
    }, 0);
  }
};
```

## 链式操作

:::tip
需要实现的 promise 的链式操作如下：
:::

```js
const promiseA = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('data from promiseA');
  }, 1000);
});

const promiseB = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('data from promiseB');
  }, 1000);
});

promiseA
  .then(res => {
    // 1s后打印data from promiseA
    console.log(`handle ${res}`);
    return promiseB;
  })
  .then(res => {
    // 2s后打印data from promiseB
    console.log(res);
  });
```

::: tip
链式操作的核心点在于`then`返回的还是一个`promise`，如果`then`函数返回了一个`promise`，则让他先执行这个 promise 再进入下一个`then`,所以需要一个函数来解析这个未知的`x`，并决定最终是`resolve`还是`reject`
:::

then 里面的处理：

```js
/*
 * 此处的this指向then的调用者
 * 难点在于resolvePromise函数
 */
then(onFulfilled, onRejected) {
  // 健壮性判断，如果then的传参不是函数就直接给一个返回参数值的函数
  onFulfilled =
    typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : err => {
          throw err;
        };
  let promise;
  promise = new MyPromise((resolve, reject) => {
    if (this.status === FULFILLED) {
      resolvePromise(promise, onFulfilled(this.value), resolve, reject);
    }

    if (this.status === REJECTED) {
      resolvePromise(promise, onRejected(this.reason), resolve, reject);
    }

    if (this.status === PENDING) {
      this.thenArr.push(() => {
        resolvePromise(promise, onFulfilled(this.value), resolve, reject);
      });
      this.catchArr.push(() => {
        resolvePromise(promise, onRejected(this.reason), resolve, reject);
      });
    }
  });
  return promise;
}
```

最核心的函数是 reslovePromise，一共包含四个参数：

- promise then 函数的返回值
- x 一个未知状态的 promise 或者值
- resolve then 函数返回的 promise 的 resolve
- reject then 函数返回的 promise 的 resolve

```js
function resolvePromise(promise, x, resolve, reject) {
  // 防止多次调用
  if (x === promise) {
    return reject(new TypeError('chaining cycle detected for promise'));
  }

  // 加锁，防止多次调用
  let called;
  // x为对象或者函数
  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (!called) {
              called = true;
              // 如果resolve之后还是promise就继续递归来解析
              resolvePromise(promise, y, resolve, reject);
            }
          },
          err => {
            if (!called) {
              called = true;
              // 捕获到错误了就直接reject
              reject(err);
            }
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (!called) {
        called = true;
        reject(error);
      }
    }
  } else {
    resolve(x);
  }
}
```

## api 的实现

### Promise.resolve & Promise.reject

`resolve`直接返回一个成功的`Promise`，`reject`直接返回一个失败的`Promise`

```js
class MyPromise {
  static resolve(data) {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
}
```

resolve 函数也可以接收一个 promise 参数，所以 resolve 需要具备等待功能，依赖上面的思想，如果是 promise，就将 then 的结果返回，然后递归去解析是否仍然是 promise

```js
class MyPromise {
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    // 等待异步结果，统一调用回调
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.thenArr.forEach(fn => fn());
    }
    return new MyPromise(resolve => {
      resolve(value);
    });
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
}
```

### Promise.prototype.catch

因为`then`函数有处理异常，所以`catch`的实现就比较简单，相当于执行`this.then(null, onRejected)`

```js
class MyPromise {
  catch(onRejected) {
    this.then(null, onRejected);
  }
}
```

<!-- ### Promise.prototype.finally

`finally`就是无论如何都会执行的函数，类似于`try catch`的`finally`如果`return`了一个`promise`，就执行完这个`promise`再`finally`，如果`return`

```js
class MyPromise {
  finally(callback) {
    return this.then(value => MyPromise.resolve(callback()));
  }
}
``` -->

### Promise.all

这个也是面试比较喜欢考的，`all`是用来处理多个`promise`并发的问题，功能可以归纳为：

- 所有`promise`同时`pending`
- 等待所有`promise`都返回了结果将每个`promise`的结果放入到一个数组，传入`then`里面的回调的第一个参数
- 只要有一个`promise`失败了，就算是失败

::: tip
实现的思路就是遍历数组调用 promise，并且用一个计数器来统计 promise 返回的次数，如果计数器最终等于传入的数组的长度时，表示 fulfilled，反之，则 rejected
:::

```js
class MyPromise {
  static all(promises) {
    const result = [];
    let count = 0;
    return new MyPromise(resolve => {
      const processResultByKey = (value, i) => {
        count++;
        result[i] = value;
        if (count === promises.length) {
          resolve(result);
        }
      };
      for (let i = 0, len = promises.length; i < len; i++) {
        // 不是promise实例的话，直接返回
        if (promises[i] instanceof MyPromise) {
          promises[i].then(res => {
            processResultByKey(res, i);
          }, reject);
        } else {
          processResultByKey(promises[i], i);
        }
      }
    });
  }
}
```
