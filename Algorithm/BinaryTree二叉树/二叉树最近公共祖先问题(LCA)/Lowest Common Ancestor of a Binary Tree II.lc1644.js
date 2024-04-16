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

/*********************** Solution: DFS PostOrder(分解+遍历思想) - LC236变形题 ************************
  key point: 如果一个节点能够在它的左右子树中分别找到p和q，则该节点为LCA节点
  与LC236唯一不同地方是输入， 236输入的p,q节点一定存在于二叉树中，此题输入的p,q节点不一定存在于二叉树中
*/

var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  //输入tree node, 返回boolean
  const searchBT = (node) => {
    if (!node) return false; //表示没有找到p或q。
    if (!p || !q) return false;

    const foundInLeft = searchBT(node.left);
    const foundInRight = searchBT(node.right);
    //后序位置： 判断当前节点是否是p,q之一
    let foundInMid = node.val === p.val || node.val === q.val;

    if (foundInLeft && foundInRight) {
      //如果左子树和右子树同时包含p和q,则当前节点node就是它们的最低公共祖先(LCA)
      lca = node;
    } else if (foundInMid && foundInLeft) {
      //如果左子树包含p或者q，并且当前节点也是其中p或q，则当前节点也是它们的LCA
      lca = node;
    } else if (foundInMid && foundInRight) {
      //如果右子树包含p或者q，并且当前节点也是其中p或q，则当前节点也是它们的LCA
      lca = node;
    }

    // 如果当前节点或其子树中找到了p或q，则返回 true 表示找到了目标节点
    if (foundInMid || foundInLeft || foundInRight) {
      return true;
    }
  };

  searchBT(root);
  return lca;
};

var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  const searchBT = (node, val1, val2) => {
    if (!node) return false;

    const findInLeft = searchBT(node.left, val1, val2);
    const findInRight = searchBT(node.right, val1, val2);
    let findInMid = node.val === val1 || node.val === val2;
    if (findInLeft && findInRight) lca = node;
    if (findInMid && findInLeft) lca = node;
    if (findInMid && findInRight) lca = node;
    return findInLeft || findInRight;
  };

  searchBT(root, p.val, q.val);
  return lca;
};
