/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
/* 以start="RXXLRXRXL", end="XRLXXRRLX"为例， return true */
var canTransform = function (start, end) {
  let s = [];
  let e = [];
  let len = start.length;

  for (let i = 0; i < len; i++) {
    if (start[i] === 'L' || start[i] === 'R') {
      s.push([start[i], i]);
    }
    if (end[i] === 'L' || end[i] === 'R') {
      e.push([end[i], i]);
    }
  }

  let sLen = s.length; // s为 [  ['R',0], ['L',3], ['R',4], ['R',6], ['L',8] ]
  let eLen = e.length; // e为 [  ['R',1], ['L',2], ['R',5], ['R',6], ['L',7] ]

  if (sLen !== eLen) return false;
  for (let i = 0; i < sLen; i++) {
    let [sItem, sIdx] = s[i];
    let [eItem, eIdx] = e[i];

    if (sItem !== eItem) return false;
    if (sItem === 'R' && sIdx > eIdx) return false; // 因为R只能向右移动
    if (sItem === 'L' && sIdx < eIdx) return false; // 因为L只能向左移动
  }

  return true;
};
