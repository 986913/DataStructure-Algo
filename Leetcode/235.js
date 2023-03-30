/* --------------------- Solution 1: Recursion：(从上往下遍历) 不用使用回溯 lc236🟡的变形题------------------------------------------
                        根据BST的顺序特性来搜索的,这里就用不上DFS pre,post,inorder了
                        二叉搜索树自带方向性，可以方便的从上向下查找目标区间，遇到目标区间内的节点，直接返回                         */
var lowestCommonAncestor = function (root, p, q) {
  const helper = (node) => {
    if (!node) return null;

    //向左去搜索
    if (node.val > p.val && node.val > q.val) {
      left = helper(node.left);
      if (left) return left; // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空说明找到了最近的公共祖先，立刻返回
    }
    //向右去搜索
    if (node.val < p.val && node.val < q.val) {
      right = helper(node.right);
      if (right) return right; // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空说明找到了最近的公共祖先，立刻返回
    }
    //遇到node节点是数值在[p,q]区间中,那么node就是p和q的最近公共祖先
    return node;
  };

  return helper(root);
};

/* --------------------- Solution 2: Itelartion (类似lc700 Itelartion解法🟡的变形题) ----------------------- */
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      return root; // found it, 当前root是在[p,q]区间中,那么当前root就是p和q的最近公共祖先。
    }
  }

  return null; // not found
};
