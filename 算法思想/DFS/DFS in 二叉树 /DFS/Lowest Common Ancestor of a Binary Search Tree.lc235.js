/***********************Solution 1: 👍 Recursion：(从上往下遍历) 不用使用回溯 ***********************
                        根据BST的顺序特性来搜索的,这里就用不上DFS pre,post,inorder了
                        二叉搜索树自带方向性，可以方便的从上向下查找目标区间，遇到目标区间内的节点，直接返回                         */

var lowestCommonAncestor = function (root, p, q) {
  return searchBT(root, p.val, q.val);
};

// helper function:
const searchBT = (node, val1, val2) => {
  if (!node) return null;

  //向左去搜索
  if (node.val > val1 && node.val > val2) {
    // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回
    const findInLeft = searchBT(node.left, val1, val2);
    if (findInLeft) return findInLeft;
  }
  //向右去搜索
  if (node.val < val1 && node.val < val2) {
    // 标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回
    const findInRight = searchBT(node.right, val1, val2);
    if (findInRight) return findInRight;
  }

  return node; //遇到node节点是数值在[p,q]区间中,那么node就是p和q的最近公共祖先
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

/*********************** Solution3: DFS (分解思想 - LC236🟡一样的解法 ************************
  https://www.bilibili.com/video/BV1jd4y1B7E2/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/
var lowestCommonAncestor = function (root, p, q) {
  return searchBT(root, p.val, q.val);
};

// helper function:
const searchBT = (node, val1, val2) => {
  if (!node) return false;

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
