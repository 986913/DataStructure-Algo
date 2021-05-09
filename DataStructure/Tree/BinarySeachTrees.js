class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;

        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          // val > current.value
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        // val === current.value
        return true;
      }
    }

    return false;
  }

  //Breadth-first search
  BFS() {
    let queue = [];
    let visited = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  //Depth-first search: PreOrder
  DFS_preOrder() {
    let visited = [];

    const helper = (helperInput) => {
      // change outside variable
      visited.push(helperInput.value);

      // change recussion's input.
      if (helperInput.left) helper(helperInput.left);
      if (helperInput.right) helper(helperInput.right);
    };

    helper(this.root);
    return visited;
  }

   //Depth-first search: PostOrder
  DFS_postOrder() {
    let visited = [];

    const helper = (helperInput) => {
      // change recussion's input.
      if (helperInput.left) helper(helperInput.left);
      if (helperInput.right) helper(helperInput.right);

      // change outside variable
      visited.push(helperInput.value);
    };
    helper(this.root);
    return visited;
  }

  //Depth-first search: InOrder
  DFS_inOrder() {
    let visited = [];

    const helper = (helperInput) => {
      // change recussion's input.
      if (helperInput.left) helper(helperInput.left);
      // change outside variable
      visited.push(helperInput.value);
      // change recussion's input.
      if (helperInput.right) helper(helperInput.right);

    };
    helper(this.root);
    return visited;
  }

  //Copy a tree, through DFS
  CopyTheTree_DFS(root) {
    if (root == null) return null;

    let newNode = new Node(root.value);
    newNode.left = this.CopyTheTree_DFS(root.left);
    newNode.right = this.CopyTheTree_DFS(root.right);

    return newNode;
  }

}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());          //  [10, 6, 15, 3, 8, 20]
console.log(tree.DFS_preOrder()); //  [10, 6, 3, 8, 15, 20]
console.log(tree.DFS_postOrder()); // [3, 8, 6, 20, 15, 10]
console.log(tree.DFS_inOrder());   // [3, 6, 8, 10, 15, 20]

console.log(tree.CopyTheTree_DFS(tree.root));
