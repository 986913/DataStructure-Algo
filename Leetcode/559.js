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

// Solution 1: DFS - recursion
var maxDepth = function (root) {
  //1.确定递归函数的参数和返回值: 参数就是传入树的根节点，返回就返回这棵树的深度
  let getDepth = (node) => {
    if (!node) return 0; //2.确定终止条件：如果为空节点的话，就返回0，表示高度为0

    //3. 确定单层递归的逻辑：遍历求它的each child node深度，最后取child node深度最大的数值
    let depth = 0;
    for (let childNode of node.children) {
      depth = Math.max(depth, getDepth(childNode));
    }

    return depth + 1; //再+1 （加1是因为算上当前中间节点）就是目前节点为根节点的树的深度
  };

  return getDepth(root);
};

// Solution2.1 ---  BFS: 是102的变形题
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

//Solution2.2 --- BFS: 是102的变形题
var maxDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let depth = 0;

  while (queue.length) {
    let len = queue.length;
    depth++; /* 层数+1 */

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
