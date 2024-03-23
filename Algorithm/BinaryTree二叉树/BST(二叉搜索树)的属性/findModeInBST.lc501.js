/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * https://www.bilibili.com/video/BV1fD4y117gp/?spm_id_from=333.788&vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
 */

/**************** Solution 1: DFS Inorder - Recursion, use map assistance LC530变形题 ***********/

var findMode = function (root) {
  const map = new Map();
  let result = [];

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    map.set(node.val, map.get(node.val) + 1 || 1);
    if (node.right) helper(node.right);
  };
  helper(root);

  let maxCount = map.get(root.val);
  for (let [key, value] of map) {
    if (value === maxCount) {
      result.push(key);
    } else if (value > maxCount) {
      result = []; //很关键的一步，不要忘记清空result，因为之前result里的元素都失效了
      maxCount = value;
      result.push(key);
    }
  }

  return result;
};

/**************** 👍 Solution 2: DFS Inorder - Recursion, No need map assistance 🟡LC530变形题 ***********/
var findMode = function (root) {
  let result = [];
  let pre = null; //<--- pre记录前一个节点
  let count = 0; //<---- 记录单个元素出现的频率
  let maxCount = 1; //<--记录整个树中某元素出现的最大频率

  const helper = (node) => {
    if (!node) return;

    helper(node.left);
    /************ 中序位置 *****************/
    if (!pre) count = 1; // 第一个节点
    else if (pre && node.val === pre.val) count++; // 与前一个节点数值相同
    else count = 1; // 与前一个节点数值不同

    pre = node; // 更新上一个节点

    if (count === maxCount) {
      // 如果和最大值相同，放进result中
      result.push(node.val);
    } else if (count > maxCount) {
      // 如果计数大于最大值频率，要更新最大频率，要清空result(关键一步)，因为之前result里的元素都失效了， 最后更新result
      maxCount = count;
      result = [];
      result.push(node.val);
    }
    /************************************/
    helper(node.right);
  };

  helper(root);
  return result;
};

/************** Solution 3: DFS Inorder - Iteration LC94模版变形题，LC530 ****************/
var findMode = function (root) {
  let cur = root;

  const stack = [];
  let result = [];
  let pre = null;
  let count = 0;
  let maxCount = 1;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();

      /*******************中**********************/
      if (!pre) count = 1; // 第一个节点
      else if (pre && cur.val === pre.val) count++; // 与前一个节点数值相同
      else count = 1; // 与前一个节点数值不同

      pre = cur; // 更新上一个节点

      if (count === maxCount) {
        // 如果和最大值相同，放进result中
        result.push(cur.val);
      } else if (count > maxCount) {
        // 如果计数大于最大值频率，要更新最大频率，要清空result，因为之前result里的元素都失效了， 最后更新result
        maxCount = count;
        result = [];
        result.push(cur.val);
      }
      /******************************************/

      cur = cur.right;
    }
  }

  return result;
};
