/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

//https://www.bilibili.com/video/BV1Gd4y1V75u/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2

/**************************** Solution1 👍👍👍 DFS PostOrder (分解思路) ******************************/
//1.确定递归函数的参数和返回值: 参数就是传入树的根节点，返回就返回这棵树的深度
var maxDepth = function (root) {
  if (!root) return 0; //2.确定终止条件：如果为空节点的话，就返回0，表示高度为0

  //3. 确定单层递归的逻辑：遍历求它的each child node深度，最后取child node深度最大的数值
  let depth = 0;
  for (let child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }
  return 1 + depth; //加1是因为算上当前中间节点, 就是目前节点为根节点的树的深度
};

/**************************** Solution2.1 👍👍👍 BFS 102的🟡变形题 ****************************/
var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let depth = 0; // 外部定义一个depth

  while (queue.length) {
    let len = queue.length;
    depth++; // 不同点在这： 层数+1

    for (let i = 0; i < len; i++) {
      let node = queue.shift();

      //这里不再是node.left, node.right了， 变成了遍历node.children
      for (let child of node.children) {
        queue.push(child);
      }
    }
  }

  return depth;
};

/*****************************  Solution2.2  BFS 102的变形题 ******************************
  var maxDepth = function (root) {
    if (!root) return 0;

    let queue = [root];
    let visited = [];

    while (queue.length) {
      let len = queue.length;
      let currLevel = [];

      for (let i = 0; i < len; i++) {
        let node = queue.shift();

        currLevel.push(node.val);
        //这里不再是node.left, node.right了， 变成了遍历node.children
        for (let child of node.children) {
          queue.push(child);
        }
      }

      visited.push(currLevel);
    }

    return visited.length;
  };
*/
