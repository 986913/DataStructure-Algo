// --------------------- Solution 1: Recursion：(从上往下遍历) 不用使用回溯，二叉搜索树自带方向性，可以方便的从上向下查找目标区间，遇到目标区间内的节点，直接返回
var lowestCommonAncestor = function (root, p, q) {
  const travelTree = (node, p, q) => {
    if (!node) return null;

    if (node.val > p.val && node.val > q.val) {
      //向左去搜索
      left = travelTree(node.left, p, q);
      if (left) return left; // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回
    }
    if (node.val < p.val && node.val < q.val) {
      //向右去搜索
      right = travelTree(node.right, p, q);
      if (right) return right; // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回
    }

    return node; //遇到node节点是数值在[p,q]区间中,那么node就是p和q的最近公共祖先
  };

  return travelTree(root, p, q);
};

// --------------------- Solution 2: Itelartion (类似lc700 Itelartion解法的变形题) -----------------------
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
