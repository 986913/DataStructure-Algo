/*************************** Solution 1:  基本for-loop ****************************/
// 时间 O(n)
var ProductOfNumbers = function () {
  this.stream = [];
};
ProductOfNumbers.prototype.add = function (num) {
  this.stream.push(num);
};
ProductOfNumbers.prototype.getProduct = function (k) {
  let len = this.stream.length;
  let res = 1;
  for (let i = len - k; i < len; i++) {
    res *= this.stream[i];
  }
  return res;
};

/*************************** Solution 2:  前缀积 ****************************/
// 时间 O(n)  空间
var ProductOfNumbers = function () {
  // preProduct 用于存储连续的前缀积
  this.preProduct = [1];
};

// 时间O(1) 空间O(n)
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    // 💥 核心逻辑：遇零重置！
    // 0 就像一堵隔离墙，任何包含它的乘积必定是 0。所以之前攒下的前缀积全都作废了，直接清空，并重新放回一个1
    this.preProduct = [1];
    return;
  }
  // 如果加入的不是 0，就把前一个前缀积与当前数字相乘，追加到数组末尾。
  let n = this.preProduct.length;
  this.preProduct.push(this.preProduct[n - 1] * num);
};

// 时间O(1)
ProductOfNumbers.prototype.getProduct = function (k) {
  let n = this.preProduct.length;
  // 🚧 判断：你要找的这 k 个数，有没有跨越那堵“0号隔离墙”？

  // 数组当前积累的有效数字个数是 (n - 1)。
  // 如果你要的个数 k 大于了有效数字的个数，说明你索要的范围里必定包含了那个被清掉的 0！
  if (k > n - 1) return 0;

  // 如果很安全，没有跨越 0，就利用前缀积的性质，用除法求出最后 k 个数的乘积：
  // 公式：当前所有数的总乘积 ÷ 倒数第 k 个数之前的总乘积
  return this.preProduct[n - 1] / this.preProduct[n - k - 1];
};
