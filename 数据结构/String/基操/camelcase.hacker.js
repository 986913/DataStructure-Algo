/**
  Problem Statement:
  Given a string s written in camelCase format, determine the number of words
  in the string.

  In camelCase:
  - The first word starts with a lowercase letter.
  - Each subsequent word starts with an uppercase letter.
  - All words are concatenated together without spaces.

  Your task is to count how many words are present in the given string.

  The function should return an integer representing the number of words.

  Example 1:
    s = "saveChangesInTheEditor"
    Output: 5
    详细解释：单词拆分为："save", "Changes", "In", "The", "Editor"

  Example 2:
    s = "oneTwoThree"
    Output: 3
    详细解释："one", "Two", "Three"

  Example 3:
    s = "camelcase"
    Output: 1
    详细解释：整个字符串只有一个单词，没有大写字母

  Example 4:
    s = "thisIsCamelCase"
    Output: 4
    详细解释： "this", "Is", "Camel", "Case"

  Constraints:
  - 1 ≤ length of s ≤ 10^5
  - s consists only of English alphabetic characters
  - The first character of s is always lowercase

  Notes:
  - 每出现一个大写字母，就代表一个新单词的开始
  - 因为第一个单词一定存在，最终结果 = 大写字母数量 + 1
*/

function camelcase(s) {
  let count = 0;

  for (let char of s) {
    if (char === char.toUpperCase()) {
      count += 1;
    }
  }
  return count + 1;
}
