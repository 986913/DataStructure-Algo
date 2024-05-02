/*
  二叉树的遍历框架:
  const preorderTraversal = (root) => {
    let visted = [];

    const traversal = (node) => {
      if (!node) return;

      visted.push(node.val);
      traversal(node.left);
      traversal(node.right);
    };

    traversal(root);
    return visted;
  };
*/

/**************** 根据二叉树的遍历框架 改写出 二维矩阵的DFS代码框架 *****************/
const dfs = (grid, i, j, visited) => {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) return; // 越界
  if (visited[i][j] == true) return; // 已遍历过 (i, j)

  // 前序位置： 进入节点 (i, j)
  visited[i][j] = true;

  //这里不再是node.left, node.right了， 而是i,j坐标的上下左右
  dfs(grid, i - 1, j, visited); // 上
  dfs(grid, i + 1, j, visited); // 下
  dfs(grid, i, j - 1, visited); // 左
  dfs(grid, i, j + 1, visited); // 右
};
