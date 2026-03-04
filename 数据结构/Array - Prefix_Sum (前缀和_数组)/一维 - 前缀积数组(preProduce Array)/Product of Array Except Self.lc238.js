/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*************************** Solution 1:  Brute force (double for-loop) ****************************/
var productExceptSelf = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      product *= nums[j];
    }
    res.push(product);
  }

  return res;
};

/*************************** Solution 2: 前缀和数组 思想 ****************************/
/**
 * 核心分解：全数组城际 = 左侧区间 × 当前元素 × 右侧区间
 *                  ⇒ res[i] = (左侧乘积) × (右侧乘积)
 *
 * 所以我们要 构造两个辅助数组：
 * 1️⃣ preProduct[i] 前缀积数组
 *    表示：nums[0 .. i-1] 的乘积（不包含 i）
 *    数学定义： preProduct[i] = Π nums[k]  (0 ≤ k ≤ i-1)
 *    特点：
 *      - 区间：[0, i-1]
 *      - preProduct[0] = 1（空乘积）
 *
 * 2️⃣ postProduct[i] 后缀积数组
 *    表示：nums[i+1 .. len-1] 的乘积（不包含 i）
 *    数学定义：postProduct[i] = Π nums[k]  (i+1 ≤ k ≤ len-1)
 *    特点：
 *      - 区间：[i+1, len-1]
 *      - postProduct[len-1] = 1（空乘积）
 *
 * 最终：res[i] = preProduct[i] × postProduct[i]

 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var productExceptSelf = function (nums) {
  let len = nums.length;

  // preProduct[i] = Π nums[0 .. i-1]
  let preProduct = Array.from({ length: len + 1 }, () => 1);
  // 构造 前缀积数组（从左向右）
  for (let i = 1; i <= len; i++) {
    preProduct[i] = preProduct[i - 1] * nums[i - 1];
  }
  // postProduct[i] = Π nums[i+1 .. len-1]
  let postProduct = Array.from({ length: len + 1 }, () => 1);
  // 构造 后缀积数组（从右向左）， 边界约束：因为要访问nums[i+1] ⇒ i ≤ len-2
  for (let i = len - 2; i >= 0; i--) {
    postProduct[i] = postProduct[i + 1] * nums[i + 1];
  }

  // 合并左右区间
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(preProduct[i] * postProduct[i]);
  }
  return res;
};

/*************************** Solution 3: 前缀和数组 思想 + 空间优化(滚动变量替代数组) ****************************/
var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = Array.from({ length: n }, () => 1);

  // 1️⃣ 构造 prefix（存进 res）--> res[i] = Π nums[0..i-1]
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  // 2️⃣ 从右向左乘 suffix,  suffix = Π nums[i+1..n-1]
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};

/*
  ===================================================================
                  【 空间优化：双向滚雪球图解 】
                  核心公式：res[i] = 左边乘积 × 右边乘积
  ===================================================================

  [原数组 nums] :      a           b           c           d


  -------------------------------------------------------------------
  ► 第一趟：从左向右 (计算前缀积，直接存入 res)
  -------------------------------------------------------------------
  [初始 prefix = 1]

  手里拿着 prefix:   1 ────────► a ────────► ab ───────► abc 
                    │           │           │           │
                    ▼           ▼           ▼           ▼
  [此时的 res]  :  [ 1 ]       [ a ]       [ ab ]      [ abc ]


  -------------------------------------------------------------------
  ◄ 第二趟：从右向左 (计算后缀积，直接乘到 res 的现有值上)
  -------------------------------------------------------------------
  [初始 suffix = 1]

  手里拿着 suffix:  bcd ◄─────── cd ◄─────── d ◄──────── 1
                    │           │           │           │
                    ▼           ▼           ▼           ▼
  [刚才的 res]  :  [ 1 ]       [ a ]       [ ab ]      [ abc ]
                    ×           ×           ×           ×
  [乘上 suffix] :    bcd         cd          d           1
                    │           │           │           │
                    ▼           ▼           ▼           ▼
  [最终的 res]  :  [ bcd ]     [ acd ]     [ abd ]     [ abc ]

  ===================================================================

*/
