/**
 * @param {string} croakOfFrogs
 * @return {number}

  这道题目主要使用了计数和状态转移的思想来解决问题。

  首先，我们使用一个map来统计每个字符出现的次数。
  由于题目规定每只青蛙的叫声按照"c", "r", "o", "a", "k"的顺序排列，因此我们只需要统计这几个字符出现的次数即可。
  然后，我们遍历给定的字符串，根据当前字符的不同情况进行相应的处理：
    如果当前字符是'c'，表示又有一只青蛙开始叫了，我们就增加当前青蛙的数量，并更新当前同时唱歌的青蛙数量和最大同时唱歌的青蛙数量。
    如果当前字符是'r'，表示有一只青蛙从'c'变到'r'，我们需要减少'c'的数量并增加'r'的数量。
    如果当前字符是'o'，表示有一只青蛙从'r'变到'o'，我们需要减少'r'的数量并增加'o'的数量。
    如果当前字符是'a'，表示有一只青蛙从'o'变到'a'，我们需要减少'o'的数量并增加'a'的数量。
    如果当前字符是'k'，表示有一只青蛙从'a'变到'k'，我们需要减少'a'的数量，并同时减少当前同时唱歌的青蛙数量，因为这只青蛙已经唱完了。
  最后，我们检查当前同时唱歌的青蛙数量是否为零，
    如果不是则说明有一些青蛙还没有唱完，返回-1；
    如果是，则返回最大同时唱歌的青蛙数量，即为所需的最少青蛙数量。
 */

var minNumberOfFrogs = function (croakOfFrogs) {
  // Handling invalid case like 'croakcro'
  if (croakOfFrogs.length % 5 !== 0) return -1;

  // 'k' is not needed in the map, because it's the last char the frog is singing so we won't use it anymore
  const map = { c: 0, r: 0, o: 0, a: 0 };
  let currentNumOfFrogs = 0; // Currently how many frogs are singing together
  let maxNumOfFrogs = 0; // Max number of frogs singing together

  for (const char of croakOfFrogs) {
    switch (char) {
      case 'c':
        // If 'c' appears, means another frog start singing => so we increase map['c'] and counter and update the global max frogs
        map['c']++;
        currentNumOfFrogs++;
        maxNumOfFrogs = Math.max(maxNumOfFrogs, currentNumOfFrogs);
        break;
      case 'r':
        // If 'r' appears => check whether the frog already song 'c' before 'r', if not, invalid;
        if (map['c'] === 0) return -1;
        // Otherwise, decrease map['c'] => It's like reseting map['c'] value so that later there's another frog sings, we could validate if it's a valid sing or not;
        map['c']--;
        // For sure, we need to update map['r'] => it's like moving our tracker to 'r' now for the current frog who are singing
        map['r']++;
        break;
      case 'o':
        if (map['r'] === 0) return -1;
        map['r']--;
        map['o']++;
        break;
      case 'a':
        if (map['o'] === 0) return -1;
        map['o']--;
        map['a']++;
        break;
      case 'k':
        // If 'k' appears => check if there was a 'a' before, if not, invalid; Otherwise decrease 'a' count
        if (map['a'] === 0) return -1;
        map['a']--;
        // Also need to decrease the currentNumOfFrogs => because the frog is done its job. It can sing another string again.
        currentNumOfFrogs--;
        break;
    }
  }

  // At the end, need to check if the currentNumOfFrogs is 0, if not, means there are some frogs haven't reached 'k' yet => invalid
  return currentNumOfFrogs !== 0 ? -1 : maxNumOfFrogs;
};
