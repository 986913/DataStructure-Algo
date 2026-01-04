/**
  Problem Statement:
  Given a string representation of a number and a maximum number of changes allowed,
  transform the string, one digit at a time, into the largest possible palindromic number.
  The length of the string must not be altered. If it is impossible to create a palindrome
  within the given number of changes, return "-1".

  Each modification counts as changing a single digit at one position. You should maximize
  the numerical value of the resulting palindrome.

  Example 1:
    s = "3943", n = 4, k = 1
    After making it a palindrome and maximizing value: "3993"
    详细步骤： “3943” → “3993”

  Example 2:
    s = "092282", n = 6, k = 3
    After making it a palindrome and maximizing value: "992299"
    详细步骤： “092282” → “292282” → “292292” → “992299”

  Example 3:
    s = "0011", n = 4, k = 1
    It is impossible to create a palindrome with at most 1 change: "-1"

  Example 4:
    s = "3143", n = 4, k = 2
    After making it a palindrome and maximizing value: "3993"
    详细步骤： “3143” → “3443” → “3993”
*/

function highestValuePalindrome(s, n, k) {
  let sArr = s.split('');
  let changed = Array(n).fill(false);

  // Step 1: 强制变成回文，记录必须改的位置
  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (sArr[left] !== sArr[right]) {
      // 改成较大数字
      let maxDigit = Math.max(Number(sArr[left]), Number(sArr[right]));
      sArr[left] = sArr[right] = String(maxDigit);
      changed[left] = changed[right] = true;
      k--;
    }
    left++;
    right--;
  }

  // 如果连最少修改都不够，连回文都做不到
  if (k < 0) return '-1';

  // Step 2: 尽量把数字升级成 9
  left = 0;
  right = n - 1;
  while (left <= right) {
    if (left === right) {
      // 奇数长度中间位
      if (k > 0) sArr[left] = '9';
    } else {
      // 计算升级成 9 的代价
      if (sArr[left] !== '9') {
        let need = 0;
        if (changed[left] || changed[right]) {
          // 已经改过的对，升级到9只需1次
          need = 1;
        } else {
          // 没改过的对，需要2次修改
          need = 2;
        }

        if (k >= need) {
          sArr[left] = sArr[right] = '9';
          k -= need;
        }
      }
    }
    left++;
    right--;
  }

  return sArr.join('');
}

/*
  💡 举例验证 s="3143", k=2
    step	sArr	 changed	k	  说明
    ---------------------------------------------------------
    Step1	"3143"	ffff	  2	  初始
    Step1	"3443"	fttf	  1	  改 1、2 保证回文
    Step2	"3993"	fttf	  0	  升级 1、2 成 9，消耗 1 次 k
    Step2	"3993"	fttf	  0	  0、3 原本未改，need=2，k不足 → 不改
*/
