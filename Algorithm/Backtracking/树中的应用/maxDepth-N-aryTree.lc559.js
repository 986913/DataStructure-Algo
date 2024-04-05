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

/**************************** Solution1: DFS PostOrder (分解思路) ******************************/
var maxDepth = function (root) {
  //1.确定递归函数的参数和返回值: 参数就是传入树的根节点，返回就返回这棵树的深度
  const helper = (node) => {
    if (!node) return 0; //2.确定终止条件：如果为空节点的话，就返回0，表示高度为0

    //3. 确定单层递归的逻辑：遍历求它的each child node深度，最后取child node深度最大的数值
    let depth = 0;
    for (let childNode of node.children) {
      depth = Math.max(depth, helper(childNode));
    }
    return depth + 1; //再+1 （加1是因为算上当前中间节点）就是目前节点为根节点的树的深度
  };

  return helper(root);
};

/****************************** Solution2: DFS（遍历思想）+ 回溯 ********************************/
var maxDepth = function (root) {
  if (!root) return 0;
  let result = -Infinity;

  const traverse = (node, curDepth) => {
    if (!node) return;

    //前序位置
    curDepth++;
    result = Math.max(result, curDepth);
    for (let child of node.children) {
      traverse(child, curDepth);
    }
    //后序位置
    curDepth--;
  };

  traverse(root, 0);
  return result;
};

/**************************** Solution3.1 👍👍👍 BFS LC102变形题 ****************************/
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
/*****************************  Solution3.2  BFS 102的变形题 *****************************
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
