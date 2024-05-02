/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */

/******************************* DFS InOrder - 迭代模版 LC94变形题 ********************************************/
var BSTIterator = function (root) {
  this.stack = [];
  this.cur = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  while (this.stack.length || this.cur) {
    // 当指针cur不为空的时候，要入栈:
    if (this.cur) {
      this.stack.push(this.cur);
      this.cur = this.cur.left;
    } else {
      // 当指针cur为空的时候，要出栈:
      this.cur = this.stack.pop();
      let val = this.cur.val; // <--- diff is here

      this.cur = this.cur.right; // 更新this.cur
      return val; // <--- diff is here
    }
  }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length !== 0 || this.cur !== null;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
