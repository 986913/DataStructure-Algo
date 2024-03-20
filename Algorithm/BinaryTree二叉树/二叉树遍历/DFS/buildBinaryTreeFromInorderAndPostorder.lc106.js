/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/************************************  DFS PreOrder ****************************************
  👍 https://www.bilibili.com/video/BV1vW4y1i7dn/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
  
  核心思想：先构造中间节点，然后递归构造左子树和右子树
  Steps:
    1. post order数组length为0时, 代表没有中节点，返回null;
    2. post order数组最后一个元素就是中节点(root)
    3. 寻找in order数组中的root元素的位置(rootIndex)作为切割点
    4. 先切割inorder
    5. 后切割postorder
    6. 递归处理左区间右区间

                    inorder: 9  3  15  20  7
                  postorder: 9  15  7  20  3️⃣
                            / \
                          /    \
                  inorder: 9    inorder: 15 20  7
                postorder: 9️⃣  postorder: 15 7 2️⃣0️⃣
                                  /  \
                                /     \
                        inorder: 15   inorder:   7
                      postorder: 1️⃣5️⃣  postorder: 7️⃣

            ----------------------------------------------
                          上面的流程会build tree:
                                  3
                                /   \
                              9     20
                                  /   \  
                                15     7
*/

var buildTree = function (inorder, postorder) {
  if (!inorder.length) return null;

  // 中
  const rootVal = postorder.pop(); // postorder最后一个元素就是中间节点
  const root = new TreeNode(rootVal); // 创建中间节点
  let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在inorder中的位置下标

  // 左： 创建左节点
  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  // 右： 创建右节点
  root.right = buildTree(
    inorder.slice(rootIndex + 1), // 注意inorder: rootIndex + 1 here
    postorder.slice(rootIndex)
  );

  return root;
};
