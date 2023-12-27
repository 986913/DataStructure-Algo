/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */

const getType = (val) => Object.prototype.toString.call(val);
const shouldDeepCompare = (type) =>
  type === '[object Object]' || type === '[object Array]';

var areDeeplyEqual = function (o1, o2) {
  const typeA = getType(o1);
  const typeB = getType(o2);

  // when both are array, or both are obj:
  // 把array和object放到一块处理了，看起来方便的多
  if (typeA === typeB && shouldDeepCompare(typeA)) {
    const kvPairsA = Object.entries(o1);
    const kvPairsB = Object.entries(o2);

    //key value pairs长度不一样，那o1不等于o2, 返回false
    if (kvPairsA.length !== kvPairsB.length) return false;

    //遍历o1的key value pairs,然后一个个和相对应的o2进行比对：
    return kvPairsA.every((pairs) => {
      const [key, val] = pairs;
      //当o2没有当前o1的key时 返回false
      if (!Object.hasOwn(o2, key)) return false;
      //当o1和o2当前的key相等时， 那就要递归比对对应的val是不是一样了，（递归在此）
      return areDeeplyEqual(val, o2[key]);
    });
  }

  // when they are primitive
  return Object.is(o1, o2);
};
