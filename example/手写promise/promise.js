// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';
// const REJECTED = 'rejected';

// 解析promise，决定最终的promise的出口时resolve还是reject
// function resolvePromise(promise, x, resolve, reject) {
//   // 避免无限循环调用，自己等待自己的情况
//   if (promise === x) {
//     return reject(
//       new TypeError('Chaining cycle detected for promise #<Promise>')
//     );
//   }

//   // 锁，防止多次调用
//   let called;

//   // x是对象或者函数
//   if ((x !== null && typeof x === 'object') || typeof x === 'function') {
//     try {
//       let then = x.then;
//       if (typeof then === 'function') {
//         then.call(
//           x,
//           y => {
//             if (called) {
//               return;
//             }
//             called = true;
//             resolvePromise(promise, y, resolve, reject);
//           },
//           err => {
//             // 成功和失败只能调用一个
//             if (called) return;
//             called = true;
//             reject(err); // 失败了就失败了
//           }
//         );
//       } else {
//         resolve(x); // 直接成功即可
//       }
//     } catch (e) {
//       // 走到 catch 也属于失败
//       if (called) return;
//       called = true;
//       // 取then出错了那就不要在继续执行了
//       reject(e);
//     }
//   } else {
//     // 不是对象或者函数直接resolve
//     resolve(x);
//   }
// }

// class MyPromise {
//   constructor(executor) {
//     this.status = PENDING;
//     this.value;
//     this.reason;
//     // 存放then的回调函数数组
//     this.thenArr = [];
//     // 存放catch的回调函数数组
//     this.catchArr = [];
//     const resolve = (res) => {
//       if (this.status === PENDING) {
//         this.value = res;
//         this.status = FULFILLED;
//         this.thenArr.forEach((fn) => fn());
//       }
//     };
//     const reject = (err) => {
//       if (this.status === PENDING) {
//         this.reason = err;
//         this.status = REJECTED;
//         this.catchArr.forEach((fn) => fn());
//       }
//     };
//     executor(resolve, reject);
//   }

//   // all方法
//   static all(promises) {
//     const result = [];
//     let count = 0;
//     return new MyPromise((resolve) => {
//       const processResultByKey = (value) => {
//         count++;
//         result.push(value);
//       };
//       for (let i = 0, len = promises.length; i < len; i++) {
//         // 不是promise实例的话，直接返回
//         if (promises[i] instanceof MyPromise) {
//           promises[i].then((res) => {
//             processResultByKey(res);
//           }, reject);
//         } else {
//           processResultByKey(promises[i]);
//         }
//       }
//       if (count === result.length) {
//         resolve(result);
//       }
//     });
//   }

//   // then需要返回一个promise
//   then(onFulfilled, onRejected) {
//     // 判断参数是否为函数，如果不是就直接给一个返回value的函数
//     onFulfilled =
//       typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
//     onRejected =
//       typeof onRejected === 'function'
//         ? onRejected
//         : (err) => {
//             throw err;
//           };
//     let promise;
//     promise = new MyPromise((resolve, reject) => {
//       // executor的状态为fulfilled
//       if (this.status === FULFILLED) {
//         setTimeout(() => {
//           resolvePromise(promise, onFulfilled(this.value), resolve, reject);
//         }, 0);
//       }

//       // executor的状态为rejected
//       if (this.status === REJECTED) {
//         setTimeout(() => {
//           resolvePromise(promise, onRejected(this.err), resolve, reject);
//         }, 0);
//       }

//       // 此处用来解决异步问题，如果依然是pending的话，可以先将then里面的回调函数放入队列，等待resolve或者reject再统一执行
//       if (this.status === PENDING) {
//         this.thenArr.push(() => {
//           setTimeout(() => {
//             resolvePromise(promise, onFulfilled(this.value), resolve, reject);
//           }, 0);
//         });
//         this.catchArr.push(() => {
//           setTimeout(() => {
//             resolvePromise(promise, onRejected(this.err), resolve, reject);
//           }, 0);
//         });
//       }
//     });
//     return promise;
//   }

//   catch(onRejected) {
//     return this.then(null, onRejected);
//   }
// }

// debugger;
// const promiseA = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });

// promiseA.then(res => {
//   debugger;
//   document.write(res);
// }, err => {
//   console.log(err);
// });

// 链式调用的核心，
// function resolvePromise(promise, x, resolve, reject) {}

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

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
  status;
  reason;
  value;
  flag;
  thenArr = [];
  catchArr = [];
  constructor(executor, flag) {
    this.status = PENDING;
    this.flag = flag;
    // 成功回调
    const resolve = res => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = res;
        // 如果是pending的状态
        this.thenArr.forEach(fn => fn());
      }
    };

    // 失败回调
    const reject = err => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = err;
        // 如果是同步函数的话，包装成异步
        this.catchArr.forEach(fn => fn());
      }
    };
    executor(resolve, reject);
  }

  // 静态的resolve函数
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.thenArr.forEach(fn => fn());
    }
    return new MyPromise(resolve => {
      resolve(value);
    });
  }

  then(onFulfilled, onRejected) {
    // 健壮性判断，如果then的传参不是函数就直接给一个返回参数值的函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
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

      // 如果还是pending，就将then缓存到thenArr
      if (this.status === PENDING) {
        this.thenArr.push(() => {
          resolvePromise(promise, onFulfilled(this.value), resolve, reject);
        });
        this.catchArr.push(() => {
          resolvePromise(promise, onRejected(this.reason), resolve, reject);
        });
      }
    }, `${this.flag} then return`);
    return promise;
  }
}

const promiseA = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('data from promiseA');
  }, 1000);
}, 'promiseA');

// const promiseB = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('data from promiseB');
//   }, 1000);
// }, 'promiseB');

// promiseA
//   .then(res => {
//     console.log(`handle ${res}`);
//     return promiseB;
//   })
//   .then(res => {
//     console.log(res);
//   });

MyPromise.resolve(11).then(res => {
  console.log(res);
});
