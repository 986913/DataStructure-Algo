/**
 * @param {string} s
 * @return {string}
 */

/*
  本题我们先统计出字符串中每种字符的个数，然后先按照从a到z的顺序循环一遍，
  如果当前字符个数大于0，我们使用一个添加到返回结果，同时当前字符个数减一。
  然后再从z到a循环一次。重复上述操作，直到所有字符都使用完（返回结果长度等于原字符长度）为止
 */

var sortString = function (s) {
  let counts = Array(26).fill(0);
  let result = '';

  // 统计每种字符个数
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;
    counts[index]++;
  }
  // console.log(counts);

  while (result.length !== s.length) {
    for (let i = 0; i < 26; i++) {
      // 从小到大取一个字母
      if (counts[i] > 0) {
        result += String.fromCharCode(97 + i);
        counts[i]--;
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (counts[i] > 0) {
        // 从大到小取一个字母
        result += String.fromCharCode(97 + i);
        counts[i]--;
      }
    }
  }

  return result;
};
