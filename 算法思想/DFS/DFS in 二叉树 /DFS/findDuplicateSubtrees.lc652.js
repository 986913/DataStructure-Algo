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
 * @return {TreeNode[]}
 */

/*********************** Solution: 序列化：DFS-PostOrder-分解+遍历思想 LC297变形题 ************************/

var findDuplicateSubtrees = function (root) {
  let allAubTrees = new Map(); // 记录所有子树以及出现的次数
  let dupSubTrees = []; //记录重复的子树根节点

  const serialize = (node) => {
    if (!node) return '#';

    let leftString = serialize(node.left);
    let rightString = serialize(node.right);
    //后序位置：postorder: left right middle
    let rootString = `${node.val},${leftString},${rightString}`;
    const freq = allAubTrees.get(rootString) || 0;
    if (freq === 1) dupSubTrees.push(node); // 多次重复也只会被加入dupSubTrees一次（因为只有在第一次发现的重复子树时才会update dupSubTrees)
    allAubTrees.set(rootString, freq + 1); // 给子树对应的出现次数加一
    return rootString;
  };

  serialize(root);
  return dupSubTrees;
};
