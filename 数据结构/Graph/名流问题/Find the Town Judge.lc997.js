/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function (n, trust) {
  let indegree = Array.from({ length: n + 1 }, () => 0);
  let outdegree = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of trust) {
    indegree[b]++; // b 被别人信任
    outdegree[a]++; // a信任了别人
  }

  for (let i = 1; i <= n; i++) {
    // 法官应该被所有人信任但不信任任何人
    if (indegree[i] === n - 1 && outdegree[i] === 0) return i;
  }

  return -1;
};
