/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*********************** Solution: DFS (分解思想） - LC235🟡变形题 ************************
  https://labuladong.online/algo/tree-class/tu-wen-er--762f5/yi-wen-mia-ed7c5/#%E7%A7%92%E6%9D%80%E4%BA%94%E9%81%93%E9%A2%98%E7%9B%AE 
  key point: 如果一个节点能够在它的左右子树中分别找到p和q，则该节点为LCA节点
    
  case 1: (p=5, q=1),  should return 3
                        3
                      /   \
                    5       1


  case 2: (p=5, q=4),  should return 5
                      3
                    /   \
                  5       1
                    \
                      2
                        \
                          4
*/

var lowestCommonAncestor = function (root, p, q) {
  return searchBT(root, p.val, q.val);
};

// helper function:
const searchBT = (node, val1, val2) => {
  if (!node) return null;

  const findInLeft = searchBT(node.left, val1, val2);
  const findInRight = searchBT(node.right, val1, val2);
  //后序位置：回溯
  const findInMid = node.val === val1 || node.val === val2;
  if (findInMid) return node; //case 2: 当前节点等于val1或val2的值 那么当前节点是LCA节点

  if (findInLeft && findInRight) return node; //case 1: 当前节点能够在它的左右子树中分别找到p和q，则当前节点也是LCA节点,向上返回node
  return findInLeft || findInRight;

  /* 
  以下等价于上面的findInLeft || findInRight
    if (findInLeft && !findInRight) return findInLeft;  // 左子树找到了val1或val2，就向上继续返回左子树
    if (!findInLeft && findInRight) return findInRight; // 右子树找到了val1或val2，就向上继续返回右子树
    return null; // 左右子树中都未找到val1或val2
  */
};
