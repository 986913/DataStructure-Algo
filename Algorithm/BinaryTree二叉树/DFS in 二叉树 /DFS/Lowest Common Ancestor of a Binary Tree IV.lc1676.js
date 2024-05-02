/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */

/*********************** Solution: DFS PostOrder(分解思想) - LC236变形题 ************************
  key point: 如果一个节点能够在它的左右子树中分别找到p和q，则该节点为LCA节点

  与LC236唯一不同地方是输入， 236输入2个节点，此题输入多个节点
  case 1: nodes=[4,7], should return 2
                        3
                      /   \
                    5       1
                  /   \    / \
                6      2   0  8
                      / \
                    7    4

  case 1: nodes=[4,7,2,6],  should return 5
                        3
                      /   \
                    5       1
                  /   \    / \
                6      2   0  8
                      / \
                    7    4
*/

var lowestCommonAncestor = function (root, nodes) {
  return searchBT(root, nodes);
};

const searchBT = (root, nodes) => {
  if (!root) return null;

  const findInLeft = searchBT(root.left, nodes);
  const findInRight = searchBT(root.right, nodes);
  //后序位置：回溯
  // diff is here:
  for (let node of nodes) {
    if (root.val === node.val) return root; //case2: 当前节点是其中一个node 且当前节点是LCA节点
  }

  if (findInLeft && findInRight) return root; //case1: 当前节点的左右子树中找到其中一个node，则当前节点是LCA节点,向上返回node
  return findInLeft || findInRight;

  /* 
  以下等价于上面的findInLeft || findInRight
    if (findInLeft && !findInRight) return findInLeft;  // 左子树找到了其中一个node，就向上继续返回左子树
    if (!findInLeft && findInRight) return findInRight; // 右子树找到了其中一个node，就向上继续返回右子树
    return null; // 左右子树中都未找到node
  */
};
