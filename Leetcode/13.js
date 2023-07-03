/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  // step 1: loop throug s, then call sum
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    sum += map[char];
  }

  // step2: minus the extact part:
  if (s.includes('IV') || s.includes('IX')) sum -= 2;
  if (s.includes('XL') || s.includes('XC')) sum -= 20;
  if (s.includes('CD') || s.includes('CM')) sum -= 200;

  return sum;
};

/**
  上述step2的解释如下：
  当在罗马数字中遇到需要进行减法的情况时，需要从总和中减去一定的值。这是因为在罗马数字系统中，较小的符号放在较大的符号的左边表示减法。
    以下是这些减法规则的解释：
      IV 表示 4，IX 表示 9：
        I（1）放在 V（5）的左边，表示 5 - 1 = 4
        I（1）放在 X（10）的左边，表示 10 - 1 = 9
        因此，当输入的罗马数字字符串中包含 IV 或 IX 时，需要从总和中减去 2 的值。
      XL 表示 40，XC 表示 90：
        X（10）放在 L（50）的左边，表示 50 - 10 = 40
        X（10）放在 C（100）的左边，表示 100 - 10 = 90
        因此，当输入的罗马数字字符串中包含 XL 或 XC 时，需要从总和中减去 20 的值。 
      CD 表示 400，CM 表示 900：
        C（100）放在 D（500）的左边，表示 500 - 100 = 400
        C（100）放在 M（1000）的左边，表示 1000 - 100 = 900
        因此，当输入的罗马数字字符串中包含 CD 或 CM 时，需要从总和中减去 200 的值。
 */
