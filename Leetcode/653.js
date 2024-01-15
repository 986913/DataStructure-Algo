/************************ Recursion: DFS *********************************/
const findTarget = (root, k) => {
  let visited = new Map();
  let exist = false; // differece is here

  const helper = (node) => {
    if (!node) return;

    //左
    if (node.left) helper(node.left);
    //中
    let diff = k - node.val;
    if (visited.has(diff)) exist = true; // update exist
    visited.set(node.val, true);
    //右
    if (node.right) helper(node.right);
  };

  helper(root);
  return exist;
};
