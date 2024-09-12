/** Definition for a Node:
	function Node(val,children) {
		this.val = val;
    this.children = children;
	};
 */

/**
  对于树结构，遍历所有「路径」和遍历所有「节点」是没什么区别的。
  因为对于树结构来说，由于只能由父节点指向子节点，所以从根节点 `root` 出发，到任意一个节点 `targetNode` 的路径都是唯一的。
  换句话说，我遍历一遍所有节点之后，必然可以找到 `root` 到 `targetNode` 的路径，而且这个路径是唯一的
 */

/***** 多叉树的遍历框架，寻找从根节点到目标节点的路径 ******/
var preorderTraversal_Nary = function (root, targetNode) {
  if (!root) return [];
  let result = []; //保存从根路径到targetNode的所有路径

  const traverse = (node, curPath) => {
    if (!node) return;

    //前序位置
    curPath.push(node.val);

    // 找到了
    if (node.val === targetNode.value) {
      result.push([...curPath]);
    }

    for (let child of node.children) {
      traverse(child, [...curPath]); // 数组使用副本
    }

    //后序位置，backtracking
    curPath.pop();
  };

  traverse(root, []);
  return result;
};
