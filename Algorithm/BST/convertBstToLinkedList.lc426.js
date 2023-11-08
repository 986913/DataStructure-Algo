/**
 // Definition for a Node.
 class Node {
     public int val;
     public Node left;
     public Node right;
    
     public Node() {}
    
     public Node(int _val) {
        val = _val;
     }
    
     public Node(int _val,Node _left,Node _right) {
         val = _val;
         left = _left;
         right = _right;
     }
 };
 */
/*  ------------------------  Solution: DFS_InOrder  ------------------------------- */
const convertToLinkedList = (root) => {
  let pre = null;
  let head = null;

  const helper = (node) => {
    if (!node) return;

    if (node.left) helper(node.left); // 左

    /* 中 */
    if (head == null) {
      // first node
      head = new Node();
      head.right = node;
    } else {
      node.left = pre;
      pre.right = node;
    }
    pre = node;

    if (node.right) helper(node.right); // 右
  };

  helper(root);
  head.right.left = pre;
  pre.right = head.right;

  return head.right;
};

// https://www.jiakaobo.com/leetcode/426.%20Convert%20Binary%20Search%20Tree%20to%20Sorted%20Doubly%20Linked%20List.htmls
