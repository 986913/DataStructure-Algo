/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

/********************************** Solution: hash Map ******************************************************/
var subdomainVisits = function (cpdomains) {
  let map = new Map();

  // 遍历输入cpdomains数组
  for (let domain of cpdomains) {
    // ["9001 discuss.leetcode.com"] ---> count=9001, domainStr="discuss.leetcode.com"
    let [count, domainStr] = domain.split(' ');

    // "discuss.leetcode.com" ---> ["discuss.leetcode.com","leetcode.com","com"]
    let domains = [];
    let parts = domainStr.split('.');
    for (let i = 0; i < parts.length; i++) {
      const str = parts.slice(i).join('.');
      domains.push(str);
    }

    /* update map here: 
      {
        'discuss.leetcode.com' => 9001,
        'leetcode.com' => 9001,
        'com' => 9001
      }
    */
    for (let domain of domains) {
      map.set(domain, map.get(domain) + Number(count) || Number(count));
    }
  }

  //map建造好了，输出map
  let res = [];
  for (let [key, val] of map) {
    res.push(`${val} ${key}`);
  }
  return res;
};
