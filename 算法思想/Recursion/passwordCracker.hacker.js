/**
 * Determines whether the given loginAttempt string can be formed by
 * concatenating one or more passwords (with repetition allowed),
 * and returns one valid concatenation order if possible.
 *
 * This function uses backtracking (DFS) to try all possible password
 * combinations, pruning invalid paths early by:
 * 1. Stopping when the constructed string exceeds the target length
 * 2. Stopping when the constructed prefix does not match the target prefix
 *
 * @function passwordCracker
 *
 * @param {string[]} passwords
 * An array of available password strings.
 * Each password may be used multiple times.
 *
 * @param {string} loginAttempt
 * The target string that needs to be formed by concatenating passwords.
 *
 * @returns {string}
 * - A single string containing one valid sequence of passwords separated
 *   by spaces if the loginAttempt can be formed.
 * - Returns the string `'WRONG PASSWORD'` if no valid concatenation exists.
 *
 * @example
 * passwordCracker(
 *   ["we", "do", "what", "must", "because", "can"],
 *   "wedowhatwemustbecausewecan"
 * );
 * // → "we do what we must because we can"
 *
 * @example
 * passwordCracker(["hello", "planet"], "helloworld");
 * // → "WRONG PASSWORD"
 *
 */

/****************************  Backtracking (ie:多叉树遍历框架 - 输入元素 无重可复选) ****************************
 * @complexity
 * Time: Exponential in the worst case (O(k^n)),
 *       where k is the number of passwords and n is the length of loginAttempt.
 *       Early pruning significantly reduces the search space in practice.
 *
 * Space: O(n), due to recursion depth and path storage.
 */
function passwordCracker(passwords, loginAttempt) {
  let result = [];

  const backtracking = (curPath) => {
    let curStr = curPath.join('');
    if (curStr === loginAttempt) {
      result.push([...curPath]);
      return;
    }
    if (curStr.length > loginAttempt.length) return;
    if (!loginAttempt.startsWith(curStr)) return;

    for (let i = 0; i < passwords.length; i++) {
      curPath.push(passwords[i]);
      backtracking(curPath);
      curPath.pop();
    }
  };
  backtracking([]);

  return result.length > 0 ? result[0].join(' ') : 'WRONG PASSWORD';
}

/******************************** DFS + 备忘录 (Top-down) ********************************/
function passwordCracker(passwords, loginAttempt) {
  const memo = new Map(); // 记忆化缓存
  const passwordSet = new Set(passwords); // 转换为Set提高查找效率

  const dfs = (remainingStr) => {
    if (memo.has(remainingStr)) return memo.get(remainingStr);
    // 基础情况：空字符串，返回空数组表示成功匹配
    if (remainingStr === '') return [];

    // 尝试所有可能的密码
    for (let password of passwordSet) {
      // 如果当前剩余字符串以这个密码开头
      if (remainingStr.startsWith(password)) {
        // 递归处理剩余部分
        const remainingResult = dfs(remainingStr.slice(password.length));

        // 如果剩余部分可以成功匹配
        if (remainingResult !== null) {
          // 构建当前解：[当前密码, ...剩余部分的解]
          const currentSolution = [password, ...remainingResult];

          memo.set(remainingStr, currentSolution);
          return currentSolution;
        }
      }
    }

    // 如果所有尝试都失败，标记为不可解
    memo.set(remainingStr, null);
    return null;
  };

  const result = dfs(loginAttempt);
  return result ? result.join(' ') : 'WRONG PASSWORD';
}

/**************************** DP（最优解） ****************************/
