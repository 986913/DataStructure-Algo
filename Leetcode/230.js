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
 * @param {number} k
 * @return {number}
 */
/******************* Solution1: DFS: Inorder - Recursion, with Array assitance  LC98, 94变形题 ********************/
var kthSmallest = function (root, k) {
  const visited = [];
  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left);
    visited.push(node.val);
    if (node.right) helper(node.right);
  };
  helper(root);

  return visited[k - 1]; // k-1 is because k is 1-indexed
};

/******************* Solution2: DFS: Inorder - Recursion, without Array assitance, LC98, 94变形题 ********************/
var kthSmallest = function (root, k) {
  let idx = 0;

  const helper = (node) => {
    if (!node) return;

    //左
    const foundInLeft = helper(node.left);
    if (foundInLeft) return foundInLeft; //在左子树中找到了Kth smallest，则直接返回
    //中
    idx += 1;
    if (idx === k) return node.val; // 当前中节点就是Kth smallest
    //右
    const foundInRight = helper(node.right);
    if (foundInRight) return foundInRight; //在右子树中找到了Kth smallest，则直接返回

    return null; // return0 也可以, 表示没有找到Kth smallest
  };
  return helper(root);
};

/*************************** Solution3: DFS: Inorder - Iteration, LC 94套模版 ***************************/
var kthSmallest = function (root, k) {
  let cur = root;
  let idx = 0; // diff is here

  const stack = [];

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();

      // diff is here:
      idx++;
      if (idx === k) return cur.val;

      cur = cur.right;
    }
  }

  return null;
};
