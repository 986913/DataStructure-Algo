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

/************************************  DFS PreOrder 🟡LC 106变形题 分解思想 ****************************************
  👍 https://www.bilibili.com/video/BV1vW4y1i7dn/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
  
  核心思想：先构造中间节点，然后递归构造左子树和右子树
  Steps:
    1. pre order数组length为0时, 代表没有中节点，返回null;
    2. pre order数组第一个元素就是中节点(root)
    3. 寻找in order数组中的root元素的位置(rootIndex)作为切割点
    4. 先切割inorder
    5. 后切割preorder
    6. 递归处理左区间右区间

                    inorder: 9  3  15  20   7
                   preorder: 3️⃣  9  20  15   7
                            / \
                          /    \
                  inorder: 9    inorder : 15  20  7
                 preorder: 9️⃣   preorder: 2️⃣0️⃣ 15  7
                                  /  \
                                /     \
                        inorder: 15   inorder:   7
                      preorder: 1️⃣5️⃣  preorder:  7️⃣

            ----------------------------------------------
                          上面的流程会build tree:
                                  3
                                /   \
                              9     20
                                  /   \  
                                15     7
*/

var buildTree = function (preorder, inorder) {
  // base case:
  if (!preorder.length) return null;

  // 中: 先创建中间节点root
  const rootVal = preorder.shift(); // <-- differe is here, preorder第1个元素就是中间节点
  const root = new TreeNode(rootVal);
  const rootIndex = inorder.indexOf(rootVal); // <-- diff is here

  // 左： 创建左节点
  root.left = buildTree(
    preorder.slice(0, rootIndex),
    inorder.slice(0, rootIndex)
  );
  // 右： 创建右节点
  root.right = buildTree(
    preorder.slice(rootIndex),
    inorder.slice(rootIndex + 1) // 注意inorder: rootIndex + 1 here
  );

  return root;
};
