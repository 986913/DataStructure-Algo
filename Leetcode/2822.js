/**
 * @param {Object|Array} obj
 * @return {Object}
 */
var invertObject = function (obj) {
  let entries = Object.entries(obj);

  let invertedObj = {};

  for (const [key, val] of entries) {
    if (Object.hasOwn(invertedObj, val)) {
      if (typeof invertedObj[val] === 'string') {
        invertedObj[val] = [invertedObj[val]];
      }
      invertedObj[val].push(key);
    } else {
      invertedObj[val] = key;
    }
  }

  return invertedObj;
};
