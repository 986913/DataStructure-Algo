/***********************Solution 1: 👍 Recursion：(从上往下遍历) 不用使用回溯 ***********************
                        根据BST的顺序特性来搜索的,这里就用不上DFS pre,post,inorder了
                        二叉搜索树自带方向性，可以方便的从上向下查找目标区间，遇到目标区间内的节点，直接返回                         */
var lowestCommonAncestor = function (root, p, q) {
  const travelTree = (node, p, q) => {
    if (!node) return null;

    //向左去搜索
    if (node.val > p.val && node.val > q.val) {
      left = travelTree(node.left, p, q);
      if (left) return left; // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回
    }
    //向右去搜索
    if (node.val < p.val && node.val < q.val) {
      right = travelTree(node.right, p, q);
      if (right) return right; // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回
    }
    return node; //遇到node节点是数值在[p,q]区间中,那么node就是p和q的最近公共祖先
  };

  return travelTree(root, p, q);
};

/************************ Solution 2: 👍 Itelartion (类似lc700 Itelartion解法🟡的变形题) ************************/
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

/*********************** Solution3: DFS PostOrder Recursion - LC236🟡变形题 ************************
  https://www.bilibili.com/video/BV1jd4y1B7E2/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/
var lowestCommonAncestor = function (root, p, q) {
  // 1.使用递归的方法, 需要从下到上，所以使用Post order, 找到p或q就输出节点p或q,找不到输出null
  const helper = (node) => {
    // 2. 确定递归终止条件
    if (!node) return null;
    if (node === p || node === q) return node; // find the p or q node, then return this p or q

    const isLeftHasPorQ = helper(node.left); // 左， isLeftHasPorQ maybe p or q (左子树有没有出现过p或q)
    const isRightHasPorQ = helper(node.right); // 右， isRightHasPorQ maybe p or q (右子树有没有出现过p或q)

    //（中处理中间节点的逻辑，回溯）后序位置：
    if (isLeftHasPorQ && isRightHasPorQ) return node; //若找到p和q,此时node就是p和q的最近公共节点。向上返回node
    if (!isLeftHasPorQ) return isRightHasPorQ; //如果左子树没出现过p或q 就向上继续返回右子树
    if (!isRightHasPorQ) return isLeftHasPorQ; //如果右子树没出现过p或q 就向上继续返回左子树
    if (!isLeftHasPorQ && !isRightHasPorQ) return null; // 若未找到节点 p 或 q
  };

  return helper(root);
};
