/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    // if not enough args. return a function that invoke curried with accepting new arguments!
    if (args.length < fn.length) {
      return (...args2) => {
        return curried.apply(this, [...args, ...args2]);
      };
    }

    // if enough args. call original fn
    return fn.apply(this, args);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
