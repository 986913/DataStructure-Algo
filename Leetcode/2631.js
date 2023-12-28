/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn.call(this, this[i]);
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = [];
    }
    result[key].push(this[i]);
  }

  return result;
};

/**
 * [1,2,3].groupBy(String)                                  // {"1":[1],"2":[2],"3":[3]}
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy(()=>String(n>5)) 
      {
        "true": [6, 7, 8, 9, 10],
        "false": [1, 2, 3, 4, 5]
      }
 */
