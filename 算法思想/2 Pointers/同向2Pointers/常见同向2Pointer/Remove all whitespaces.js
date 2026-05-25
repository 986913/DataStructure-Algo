/**
 * Remove all whitespace characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string without whitespace characters.
 *
 * Example:
 *   removeWhitespaces('Hello,   World!'); // 'Hello,World!'
 *   removeWhitespaces('  This is a sentence.\nIt contains some whitespace.  '); // 'Thisisasentence.Itcontainssomewhitespace.'
 *   removeWhitespaces('\t  \n\n'); // ''
 */

/************************* 👍👍👍 Solution: in-place Two Pointer ********************************/
/* 这题解法的核心就是遍历数据过程中遇到等于目标值就直接跳过，不等于目标值就赋值，这样就能过滤掉（也就是删除掉）目标值
    fast(read) pointer: loop throgh the whole array. 寻找新数组的元素,新数组就是不含有目标元素的数组
    slow(write) pointer: 记录新数组的写入位置
*/

const removeWhitespaces = (string) => {
  if (string.length === 0) return string;

  const arr = string.split('');
  let read = 0;
  let write = 0;

  while (read < arr.length) {
    // 等价于: arr[read] !== ' ' && arr[read] !== '\t' && arr[read] !== '\n'
    if (/\s/.test(arr[read]) === false) {
      // 非空白字符才保留
      arr[write++] = arr[read];
    }
    read++;
  }

  return arr.slice(0, write).join('');
};
