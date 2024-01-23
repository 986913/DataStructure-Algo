/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  if (s.length < t.length) return '';

  // Step1: build s frencyMap
  let frencyMap = new Map();
  for (let i = 0; i < t.length; i++) {
    frencyMap.set(t[i], frencyMap.get(t[i]) + 1 || 1);
  }

  // Step2: define 2 pointers and other helper variables
  let slow = 0;
  let fast = 0;

  let minSubStrLen = Infinity;
  let minSubStr = '';
  let matched = 0;

  // Step3: 遍历s
  while (fast < s.length) {
    /* 增大窗口： char是将移入窗口的字符 */
    let char = s[fast];
    fast++;

    //进行窗口内数据的一系列更新
    if (frencyMap.has(char)) {
      frencyMap.set(char, frencyMap.get(char) - 1); // frencyMap中要是有char, 那就给其value-1
      if (frencyMap.get(char) >= 0) matched += 1; // update matched
    }

    // console.log(slow, fast)

    /* 缩小窗口：判断左侧窗口是否要收缩: 当t的所有字符都匹对上的时候 */
    while (matched === t.length) {
      // update helper variable :
      if (minSubStrLen > fast - slow + 1) {
        minSubStrLen = fast - slow + 1;
        minSubStr = s.substring(slow, fast);
      }

      //char是将移出窗口的字符
      let char = s[slow];
      slow++;

      //进行窗口内数据的一系列更新
      if (frencyMap.has(char)) {
        if (frencyMap.get(char) === 0) matched -= 1; // update matched
        frencyMap.set(char, frencyMap.get(char) + 1); // frencyMap中要是有char, 那就给其value+1
      }
    }
  }

  return minSubStr;
};
