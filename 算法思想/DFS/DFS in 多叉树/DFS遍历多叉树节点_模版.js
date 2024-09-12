/** Definition for a Node:
	function Node(val,children) {
		this.val = val;
    this.children = children;
	};
 */

/**
  Steps:
    1. 确定递归函数的 参数 和 返回值
    2. 确定终止条件
    3. 确定单层递归的逻辑
 **/
/** ----------------------------- 二叉树 DFS pre order: 中左右 ----------------------------- */
const preorderTraversal = (root) => {
  let visitedNodes = [];

  /*递归函数的 参数 和 返回值 */
  const helper = (node) => {
    /*终止条件 */
    if (!node) return;

    /* 单层递归的逻辑 */
    visitedNodes.push(node.val); // 🀄️
    helper(node.left); // 左
    helper(node.right); // 右
  };

  helper(root);
  return visitedNodes;
};
/** -----------------------------  二叉树 DFS in order: 左中右 ----------------------------- */
const inorderTraversal = (root) => {
  let visitedNodes = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left); // 左
    visitedNodes.push(node.val); // 🀄️
    helper(node.right); // 右
  };

  helper(root);
  return visitedNodes;
};
/** -----------------------------  二叉树 DFS post order: 左右中 ----------------------------- */
const postorderTraversal = (root) => {
  let visitedNodes = [];

  const helper = (node) => {
    if (!node) return;

    helper(node.left); // 左
    helper(node.right); // 右
    visitedNodes.push(node.val); // 🀄️
  };

  helper(root);
  return visitedNodes;
};

/** ----------------------------- N-ary Tree 多叉树 PreOrder遍历框架  ----------------------------- */
const preorderTraversal_Nary = (root) => {
  let visitedNodes = [];

  const traversal = (node) => {
    if (!node) return;

    visitedNodes.push(node.val); //前序位置, console.log('进入节点 ' + node);
    for (let child of node.children) {
      traversal(child);
    }
    //console.log('离开节点 ' + node);
  };

  traversal(root);
  return visitedNodes;
};
/** ----------------------------- N-ary Tree 多叉树 PostOrder遍历框架 ----------------------------- */
const postorderTraversal_Nary = (root) => {
  let visitedNodes = [];

  const traversal = (node) => {
    if (!node) return;

    // console.log('进入节点 ' + node);
    for (let child of node.children) {
      traversal(child);
    }
    visitedNodes.push(node.val); //后序位置, console.log('离开节点 ' + node);
  };

  traversal(root);
  return visitedNodes;
};

/*********************************** DFS VS Backtracking ****************************************/
// DFS 算法，关注点在节点
var traverse = function (root) {
  if (root == null) return;

  printf('进入节点 ' + root);
  for (let child of node.children) {
    traversal(child);
  }
  printf('离开节点 ' + root);
};

// 回溯算法，关注点在树枝
var traverse = function (root) {
  if (root == null) return;

  for (let child of node.children) {
    printf('从 ' + root + ' 到 ' + child); // 做选择
    traverse(child);
    printf('从 ' + child + ' 到 ' + root); // 撤销选择
  }
};
