/*****************************  Solution: Run Length Eeconding (In-Place) / 双指针  ******************************/
/**
 * 算法：双指针原地修改 (Two Pointers In-Place)
 * 逻辑：read 指针负责向后探索并计数，write 指针负责在前面填坑。
 *
 * 示例推演：chars = ['a', 'a', 'b', 'c', 'c', 'c']
 * * [初始状态]
 * 数组: ['a', 'a', 'b', 'c', 'c', 'c']
 * read=0, write=0  (当前字符'a', 计数 count=1)
 *
 * [步骤 1] 扫描完 'a' (遇到不同字符 'b' 触发写入)
 * 动作: 写入字符 'a'，写入数字 '2'，count 重置为 1
 * 数组: ['a', '2', 'b', 'c', 'c', 'c']
 * write=2  read=2
 *
 * [步骤 2] 扫描完 'b' (单个字符，不写数字)
 * 动作: 写入字符 'b'，count 重置为 1
 * 数组: ['a', '2', 'b', 'c', 'c', 'c']
 * write=3  read=3
 *
 * [步骤 3] 扫描完 'c' (到达数组末尾，触发最后一次写入)
 * 动作: 写入字符 'c'，写入数字 '3'，循环结束
 * 数组: ['a', '2', 'b', 'c', '3', 'c']
 * write=5   read=5
 *
 * 结果：返回 write 的值 5。有效数组部分为前 5 个元素：['a', '2', 'b', 'c', '3']
 */

var compress = function (chars) {
  let count = 1;
  let write = 0;

  //遍历到数组最后一位
  for (let read = 0; read < chars.length; read++) {
    let curChar = chars[read];

    // 当 read 是最后一位时，chars[read+1] 是 undefined，自然会走到 else
    if (curChar === chars[read + 1]) {
      count++;
    } else {
      // 填坑工开始干活
      chars[write] = curChar;
      write++;

      // 只有数量大于 1 才需要写数字
      if (count > 1) {
        let countStr = String(count);
        // 如果是多位数（如 "12"），拆开挨个写
        for (let n of countStr) {
          chars[write] = n;
          write++;
        }
      }
      // 重置计数器，准备迎接下一个新字符
      count = 1;
    }
  }

  // 题目要求返回修改后的新长度，write 指针停下的位置正好就是新长度
  return write;
};

/*****************************  Solution: Run Length Eeconding (不是In-Place版本)  ******************************
  var compress = function (chars) {
    let chunks = [];
    let counts = 1;

    // chars: ["a","b","b","c","d","d","d","e","e","e","e","e","e","e","e","e","e"] ---> chunks: [1,2,1,3,10]
    for (let i = 1; i <= chars.length; i++) {
      if (chars[i] === chars[i - 1]) {
        counts++;
      } else {
        chunks.push(counts);
        counts = 1;
      }
    }
    // chunks: [1,2,1,3,10] ---> mapped: [1,2,1,2,3]
    const mapped = chunks.map((chunk) => {
      if (chunk === 1) return 1; //为了题目要求的“a”,而不是"a1"
      return 1 + String(chunk).length;
    });
    // mapped: [1,2,1,2,3]求和是9,  也就是"ab2cd3e10"的长度
    const res = mapped.reduce((acc, cur) => acc + cur, 0);
    return res;
  };
*/
