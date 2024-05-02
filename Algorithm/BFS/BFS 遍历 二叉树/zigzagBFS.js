/**
  Given a binary tree, populate an array to represent its zigzag level order traversal. 
  You should populate the values of all nodes of the first level from left to right, 
  then right to left for the next level and keep alternating in the same manner for the following levels.

                 1
                / \
              2    3
            /  \  / \
          4     56   7
    zigzagBFS(root) // [[1], [3,2], [4，5，6，7]]
 */

/* ------- 👍👍👍 是102 BFS 🟡的变形题 -------- */
var zigzagBFS = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];
  let leftToRight = true; //不同点在这: 有个leftToRight flag控制每一层的遍历顺序

  while (queue.length) {
    let len = queue.length;
    let curLevel = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      //不同点在这: 控制遍历顺序
      if (leftToRight) curLevel.push(node.val);
      else curLevel.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    visited.push(curLevel);
    leftToRight = !leftToRight; //不同点在这
  }

  return visited;
};
