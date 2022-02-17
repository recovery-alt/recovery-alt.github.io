function resolvePromise(promise, x, resolve, reject) {
  // 防止多次调用
  if (x === promise) return reject(new TypeError('chaining cycle detected for promise'));

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
            if (called) return;
            called = true;
            // 如果resolve之后还是promise就继续递归来解析
            resolvePromise(promise, y, resolve, reject);
          },
          err => {
            if (called) return;
            called = true;
            // 捕获到错误了就直接reject
            reject(err);
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

class Promise {
  constructor(execute) {
    this.thenArr = [];
    this.catchArr = [];
    this.status = 'pedding';

    const resovle = res => {
      if (this.status === 'pedding') {
        this.status = 'fulfilled';
        this.value = res;
        setTimeout(() => this.thenArr.forEach(fn => fn()), 0);
      }
    };

    const reject = err => {
      if (this.status === 'pedding') {
        this.status = 'rejected';
        this.reason = err;
        setTimeout(() => this.catchArr.forEach(fn => fn()), 0);
      }
    };

    execute(resovle, reject);
  }

  then(onFulfilled, onRejected) {
    const promise = new Promise((resolve, reject) => {
      if (typeof onFulfilled !== 'function') onFulfilled = val => val;
      if (typeof onRejected !== 'function') onRejected = val => val;

      switch (this.status) {
        case 'fulfilled':
          setTimeout(() => {
            resolvePromise(promise, onFulfilled(this.value), resolve, reject);
          }, 0);
          break;
        case 'rejected':
          setTimeout(() => {
            resolvePromise(promise, onRejected(this.reason), resolve, reject);
          }, 0);
          break;
        default:
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
}

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data from promiseA');
  }, 1000);
});

const promiseB = new Promise((resolve, reject) => {
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
