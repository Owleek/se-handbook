class CustomPromise {
  static resolve(value) {
    return new this((_resolve) => {
      _resolve(value);
    });
  }

  static reject(value) {
    return new _this((_, _reject) => {
      _reject(value);
    });
  }

  constructor(executorFn) {
    this.state = 'pending';
    this.result = undefined;
    this.onresolveFn = [];
    this.onrejectFn = [];
    this.onfinalyFn = [];
    this.isHandled = false;

    const resolve = this.#resolve.bind(this);
    const reject = this.#reject.bind(this);
    executorFn(resolve, reject);
  }

  #resolve(value) {
    this.state = 'fulfilled';
    this.result = value;
  }

  #reject(value) {
    this.state = 'rejected';
    this.result = value;
  }

  #subscribe(successExecutor, failExecutor) {
    this.isHandled = true;
    const value = this.result;
    if (!!successExecutor) this.onresolveFn.push(() => successExecutor(value));
    if (!!failExecutor) this.onrejectFn.push(() => failExecutor(value));
  }

  #runTask() {
    const arr = this.state === 'fulfilled' ? this.onresolveFn : this.onrejectFn;
    return arr[arr.length - 1]();
  }

  then(successExecutor, failExecutor) {
    this.#subscribe(successExecutor, failExecutor);

    const runTask = this.#runTask.bind(this);
    const isFulfilled = this.state === 'fulfilled';

    const newPromise = new this.constructor((resolve, reject) => {
      queueMicrotask(() => {
        const value = runTask();
        isFulfilled ? resolve(value) : reject(value);
      });
    });

    debugger;

    return newPromise;
  }
}

export default CustomPromise;
