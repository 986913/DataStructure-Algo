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
 * @return {void} Do not return anything, modify root in-place instead.
 */

/*************************** Solution: DFS (分解思路) LC25变形题****************************
                  1                            1                        1
                /   \                         / \                        \  
              2      5    --Step1-->       (L)2   5(R)    --Step2-->      2
            /  \      \                       \    \                       \   
          3     4      6                       3    6                       3
                                                \                            \
                                                  4                           4
                                                                                \
                                                                                  5
                                                                                    \
                                                                                      6
*/
var flatten = function (root) {
  if (!root) return;

  /****** Step1 ******/
  flatten(root.left); //左子树已被拉平成一条链表
  let L = root.left; // L is just for record
  flatten(root.right); //右子树已被拉平成一条链表
  let R = root.right; // R is just for record

  /****** Step2 ******/
  root.left = null;
  root.right = L;
  let cur = root;
  while (cur.right) {
    cur = cur.right;
  }
  cur.right = R;
};
