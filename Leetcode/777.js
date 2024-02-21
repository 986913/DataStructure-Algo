/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
  思路是：L只能向左移，R只能向右移，
        通过比较start, end字符串, 如果有发现下面任何一个case,就return false:
            start中的L个数!==end中的L个数
            start中的R个数!==end中的R个数
            start中的相对应的L的idx < end中的相对应的L的idx
            start中的相对应的R的idx > end中的相对应的R的idx
        如果都通过，那就没问题 return true

  以start="RXXLRXRXL", end="XRLXXRRLX"为例， return true
  以start="X",         end="L"为例，         return false
  以start="LLR",       end="RRL"为例，       return false
 */

var canTransform = function (start, end) {
  let s = [];
  let e = [];
  let len = start.length;

  // s为 [  ['R',0], ['L',3], ['R',4], ['R',6], ['L',8] ]
  // e为 [  ['R',1], ['L',2], ['R',5], ['R',6], ['L',7] ]
  for (let i = 0; i < len; i++) {
    if (start[i] === 'L' || start[i] === 'R') {
      s.push([start[i], i]);
    }
    if (end[i] === 'L' || end[i] === 'R') {
      e.push([end[i], i]);
    }
  }

  let sLen = s.length;
  let eLen = e.length;
  if (sLen !== eLen) return false;
  for (let i = 0; i < sLen; i++) {
    let [sItem, sIdx] = s[i];
    let [eItem, eIdx] = e[i];

    if (sItem !== eItem) return false; //for cases like:  start="LLR", end="RRL"  (start与end中L和R的相对位置及数量要一致)
    if (sItem === 'R' && sIdx > eIdx) return false; // 因为R只能向右移动
    if (sItem === 'L' && sIdx < eIdx) return false; // 因为L只能向左移动
  }

  return true;
};
