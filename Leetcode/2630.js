/**
 * @param {Function} fn
 */
/******************* 2623变形题 ************************************* 
  function memoize(fn) {
    const cache = new Map();

    return function (...args) {
      const key = args.join('-');
      if (cache.has(key)) return cache.get(key);

      const result = fn.apply(this, args);
      cache.set(key, result);
      return result;
    };
  }
*/

//功能是一样的，但是更高级：
function memoize(fn) {
  const cache = new Map();
  const RES = Symbol('result');

  return (...args) => {
    let currentCache = cache;
    for (const param of args) {
      if (!currentCache.has(param)) {
        currentCache.set(param, new Map());
      }
      currentCache = currentCache.get(param);
    }

    if (currentCache.has(RES)) return currentCache.get(RES);

    const result = fn.apply(this, args);
    currentCache.set(RES, result);
    return result;
  };
}
