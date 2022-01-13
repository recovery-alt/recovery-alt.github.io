const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 解析promise，决定最终的promise的出口时resolve还是reject
function resolvePromise(promise, x, resolve, reject) {
  // 避免无限循环调用，自己等待自己的情况
  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
  }

  // 锁，防止多次调用
  let called;

  // x是对象或者函数
  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) {
              return;
            }
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          err => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            reject(err); // 失败了就失败了
          }
        );
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      // 走到 catch 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e);
    }
  } else {
    // 不是对象或者函数直接resolve
    resolve(x);
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value;
    this.reason;
    // 存放then的回调函数数组
    this.thenArr = [];
    // 存放catch的回调函数数组
    this.catchArr = [];
    const resolve = res => {
      if (this.status === PENDING) {
        this.value = res;
        this.status = FULFILLED;
        this.thenArr.forEach(fn => fn());
      }
    };
    const reject = err => {
      if (this.status === PENDING) {
        this.reason = err;
        this.status = REJECTED;
        this.catchArr.forEach(fn => fn());
      }
    };
    executor(resolve, reject);
  }

  // all方法
  static all(promises) {
    if (!Array.isArray(promises)) throw new Error('input is not a array');

    return new Promise((resovle, reject) => {
      let count = 0;
      const result = [];

      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then(res => {
            result[i] = res;
            count++;

            if (count === promises.length) resovle(result);
          })
          .catch(reject);
      }
    });
  }

  // then需要返回一个promise
  then(onFulfilled, onRejected) {
    // 判断参数是否为函数，如果不是就直接给一个返回value的函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : err => {
            throw err;
          };
    let promise;
    promise = new MyPromise((resolve, reject) => {
      // executor的状态为fulfilled
      if (this.status === FULFILLED) {
        setTimeout(() => {
          resolvePromise(promise, onFulfilled(this.value), resolve, reject);
        }, 0);
      }

      // executor的状态为rejected
      if (this.status === REJECTED) {
        setTimeout(() => {
          resolvePromise(promise, onRejected(this.err), resolve, reject);
        }, 0);
      }

      // 此处用来解决异步问题，如果依然是pending的话，可以先将then里面的回调函数放入队列，等待resolve或者reject再统一执行
      if (this.status === PENDING) {
        this.thenArr.push(() => {
          setTimeout(() => {
            resolvePromise(promise, onFulfilled(this.value), resolve, reject);
          }, 0);
        });
        this.catchArr.push(() => {
          setTimeout(() => {
            resolvePromise(promise, onRejected(this.err), resolve, reject);
          }, 0);
        });
      }
    });
    return promise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

const promiseA = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promiseA.then(
  res => {
    document.write(res);
  },
  err => {
    console.log(err);
  }
);
