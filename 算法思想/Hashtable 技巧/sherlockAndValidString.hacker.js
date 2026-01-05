/**
  Problem Statement:
  Sherlock considers a string to be valid if all characters in the string
  appear the same number of times. The string is also considered valid if
  it is possible to remove exactly one character at a single index such
  that the remaining characters all occur the same number of times.

  Given a string s, determine whether it is valid. If the string is valid,
  return "YES". Otherwise, return "NO".

  Each removal operation deletes one character from the string. At most
  one character may be removed. The relative order of the remaining
  characters must not be altered.

  Example 1:
    s = "aabbcc"
    All characters occur twice, so the string is valid.
    Result: "YES"

  Example 2:
    s = "aabbccc"
    By removing one occurrence of 'c', the string becomes "aabbcc", where all characters occur twice.
    Result: "YES"

  Example 3:
    s = "aabbcd"
    Removing only one character can not make all remaining character frequencies equal.
    Result: "NO"

  Example 4:
    s = "aabbccddeefghi"
    No single character removal can make the remaining characters occur the same number of times.
    Result: "NO"
*/

function isValid(s) {
  const charFreq = {};
  for (const c of s) {
    charFreq[c] = (charFreq[c] || 0) + 1;
  }

  const freqCount = {};
  for (const freq of Object.values(charFreq)) {
    freqCount[freq] = (freqCount[freq] || 0) + 1;
  }

  const freqs = Object.keys(freqCount).map(Number);

  // 只有一种频率
  if (freqs.length === 1) return 'YES';

  // 超过两种频率
  if (freqs.length > 2) return 'NO';

  const [f1, f2] = freqs;
  const c1 = freqCount[f1];
  const c2 = freqCount[f2];

  // 情况 2
  if ((f1 === 1 && c1 === 1) || (f2 === 1 && c2 === 1)) {
    return 'YES';
  }

  // 情况 3
  if (Math.abs(f1 - f2) === 1) {
    if ((f1 > f2 && c1 === 1) || (f2 > f1 && c2 === 1)) {
      return 'YES';
    }
  }

  return 'NO';
}

/*
  | 字符串例子         | charFreq                             |freqCount | f1 | c1 | f2 | c2 | 差值 | Case |
  | ---------------- | ------------------------------------- | --------- | -- | -- | -- | -- | -- | ---- |
  | `aabbcc`         | {a:2,b:2,c:2}                         | {2:3}     | 2  | 3  | -  | -  | -  | 1    |
  | `aabbccc`        | {a:2,b:2,c:3}                         | {2:2,3:1} | 2  | 2  | 3  | 1  | 1  | 3    |
  | `aaabbbb`        | {a:3,b:4}                             | {3:1,4:1} | 3  | 1  | 4  | 1  | 1  | 3    |
  | `aabbcd`         | {a:2,b:2,c:1,d:1}                     | {2:2,1:2} | 2  | 2  | 1  | 2  | -  | NO   |
  | `aabbccddeefghi` | {a:2,b:2,c:2,d:2,e:2,f:1,g:1,h:1,i:1} | {2:5,1:4} | 2  | 5  | 1  | 4  | -  | NO   |
  | `aabbccd`        | {a:2,b:2,c:2,d:1}                     | {2:3,1:1} | 2  | 3  | 1  | 1  | 1  | 2    |

🔹 Case 说明（对应上面的代码）
    Case 1 → 所有字符频率相同 → freqs.length === 1
    Case 2 → 有唯一一个字符频率为 1 → f === 1 && c === 1
    Case 3 → 两种频率，差值为 1，且高频率字符只出现一次 → Math.abs(f1 - f2) === 1 && (高频率的 c === 1)
*/
