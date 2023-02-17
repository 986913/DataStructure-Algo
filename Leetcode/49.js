/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  // step1: sort each single str:  ["eat","tea","tan","ate","nat","bat"] ---> [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
  const strArr = []; // for save after sorted.
  for (let i = 0; i < strs.length; i++) {
    strArr.push(strs[i].split('').sort().join(''));
  }

  /* step2: forloop sorted arr to creat map, element as key, index values (array) as value
    { 'aet' => [ 0, 1, 3 ], 'ant' => [ 2, 4 ], 'abt' => [ 5 ] } */
  let map = new Map();
  for (let i = 0; i < strArr.length; i++) {
    map.set(strArr[i], [...Array.from(map.get(strArr[i]) || []), i]);
  }

  // step3: iterate map's value（which is index array) to map corresponding ele of strs
  const result = [];
  map.forEach((valueArr, key) => {
    const arr = [];
    valueArr.forEach((n) => arr.push(strs[n])); // 注意是strs
    result.push(arr);
  });

  return result;
};
