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
    this.size = 0;
  }
  /* BST的插入元素: 迭代和递归两种方式----------------------------------------------------------------------------- --------- */
  insert_iteration_way(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      this.size++;
      return this;
    } else {
      let curr = this.root;

      while (true) {
        if (val < curr.value) {
          // left side
          if (curr.left === null) {
            curr.left = newNode;
            this.size++;
            return this;
          }
          curr = curr.left;
        } else {
          // right side
          if (curr.right === null) {
            curr.right = newNode;
            this.size++;
            return this;
          }
          curr = curr.right;
        }
      }
    }
  }
  insert_recurrsion_way(val) {
    const helper = (node, val) => {
      if (node == null) {
        this.size++;
        return new Node(val);
      }

      if (val < node.value) {
        //left side
        node.left = helper(node.left, val);
      } else if (val > node.value) {
        //right side
        node.right = helper(node.right, val);
      }

      return node;
    };

    this.root = helper(this.root, val);
  }

  /* BST的查询-： 迭代和递归两种方式--------------------------------------------------------------------------------- ------- */
  contains_iteration_way(val) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (val < curr.value) {
        curr = curr.left;
      } else if (val > curr.value) {
        curr = curr.right;
      } else {
        // found the val
        return true;
      }
    }
    return false;
  }
  contains_recurrsion_way(val) {
    const helper = (node, val) => {
      if (!node) return false;

      if (val < node.value) {
        return helper(node.left, val);
      } else if (val > node.value) {
        return helper(node.right, val);
      } else {
        return true;
      }
    };

    return helper(this.root, val);
  }

  /* DFS: PreOrder: 迭代(Stack)和递归两种方式------------------------------------------------------------------------ ----------------------------*/
  DFS_preOrder_recurrsion() {
    let visited = [];

    const helper = (node) => {
      // change outside variable
      visited.push(node.value);

      // change recussion's input.
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };

    helper(this.root);
    return visited;
  }
  DFS_preOrder_iteration() {
    // use Stack : https://coding.imooc.com/lesson/207.html#mid=13469
    let stack = [];
    let visited = [];

    stack.push(this.root);

    while (stack.length) {
      let curr = stack.pop(); // push + pop combo
      visited.push(curr.value);

      //先右后左：
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
    return visited;
  }
  /* DFS: PostOrder: 递归 ---------------------------------------------------------------------------------------- ------------------*/
  DFS_postOrder() {
    let visited = [];

    const helper = (node) => {
      // change recussion's input.
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);

      // change outside variable
      visited.push(node.value);
    };

    helper(this.root);
    return visited;
  }
  /* DFS: InOrder： 递归 ---------------------------------------------------------------------------------------- ------------------*/
  DFS_inOrder() {
    let visited = [];

    const helper = (node) => {
      // change recussion's input.
      if (node.left) helper(node.left);
      // change outside variable
      visited.push(node.value);
      // change recussion's input.
      if (node.right) helper(node.right);
    };

    helper(this.root);
    return visited;
  }

  /* BFS：迭代（use Queue）-----https://coding.imooc.com/lesson/207.html#mid=13471------------------------------------- */
  BFS() {
    let queue = [];
    let visited = [];

    queue.push(this.root);

    while (queue.length) {
      let node = queue.shift(); // push + shift combo
      visited.push(node.value);

      //先左后右：
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /* Copy a tree, through DFS --------------------------------------------------------------------------- ---------*/
  CopyTheTree_DFS(root) {
    if (root == null) return null;

    let newNode = new Node(root.value);
    newNode.left = this.CopyTheTree_DFS(root.left);
    newNode.right = this.CopyTheTree_DFS(root.right);

    return newNode;
  }

  /* find the Min node's value ------------------------------------------------------------------------------------- ----------------------- */
  findMin_iteration_way() {
    if (!this.root) return null;

    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }
  findMin_recurrsion_way() {
    if (!this.root) return null;
    const helper = (node) => {
      if (!node.left) return node.value;
      else return helper(node.left);
    };
    return helper(this.root);
  }

  /* find the Max node's value ---------------------------------------------------------------- -------------------------------------------- */
  findMax_iteration_way() {
    if (!this.root) return null;

    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }
  findMax_recurrsion_way() {
    if (!this.root) return null;
    const helper = (node) => {
      if (!node.right) return node.value;
      else return helper(node.right);
    };
    return helper(this.root);
  }

  /* 查看是否是叶子节点 ------------------------------------------------------------------------ */
  isLeaf(node) {
    if (!node) return null;
    return !node.left && !node.right;
  }

  /* Del the Min node  ------------------------------------------------------------------ ------------------------------------------  */
  deleteMin_iteration_way() {
    //1. find the min node
    if (!this.root) return null;

    let curr = this.root;
    let parentNode = this.root;
    while (curr.left) {
      parentNode = curr;
      curr = curr.left;
    }
    // console.log(curr, parentNode); --> curr is the min node, parentNode is the parent of min node

    //2. check if it's a leaf node?  if it's a leaf, delete it directly, otherwise, make it right node refer to his parent node's left node.
    if (this.isLeaf(curr)) parentNode.left = null;
    else parentNode.left = curr.right;

    this.size--;

    return this.root;
  }
  deleteMin_recurrsion_way() {
    if (!this.root) return null;
    let parentNode = this.root;

    const helper = (node) => {
      if (!node.left) {
        // console.log(node, parentNode);  node is the min node, parentNode is the parent of min node here
        if (this.isLeaf(node)) parentNode.left = null;
        else parentNode.left = node.right;

        this.size--;
        return this.root;
      } else {
        parentNode = node;
        return helper(node.left);
      }
    };
    return helper(this.root);
  }

  /* Del the Max node  ---------------------------------------------------------------------- --------------------------------------  */
  deleteMax_iteration_way() {
    //1. find the max node
    if (!this.root) return null;

    let curr = this.root;
    let parentNode = this.root;
    while (curr.right) {
      parentNode = curr;
      curr = curr.right;
    }
    // console.log(curr, parentNode); --> curr is the max node, parentNode is the parent of max node

    //2. check if it's a leaf node?  if it's a leaf, delete it directly, otherwise, make it left node refer to his parent node's right node.
    if (this.isLeaf(curr)) parentNode.right = null;
    else parentNode.right = curr.left;

    this.size--;
    return this.root;
  }
  deleteMax_recurrsion_way() {
    if (!this.root) return null;
    let parentNode = this.root;

    const helper = (node) => {
      if (!node.right) {
        // console.log(node, parentNode);  node is the max node, parentNode is the parent of max node here
        if (this.isLeaf(node)) parentNode.right = null;
        else parentNode.right = node.left;

        this.size--;
        return this.root;
      } else {
        parentNode = node;
        return helper(node.right);
      }
    };
    return helper(this.root);
  }
}

const tree1 = new BinarySearchTree();
tree1.insert_iteration_way(10);
tree1.insert_iteration_way(6);
tree1.insert_iteration_way(15);
tree1.insert_iteration_way(3);
tree1.insert_iteration_way(8);
tree1.insert_iteration_way(20);
tree1.insert_iteration_way(13);
console.log(tree1.DFS_preOrder_iteration());
console.log(tree1.BFS());

tree1.deleteMin_iteration_way();
console.log(tree1.DFS_preOrder_iteration());
console.log(tree1.BFS());

tree1.deleteMin_iteration_way();
console.log(tree1.DFS_preOrder_iteration());
console.log(tree1.BFS());

tree1.deleteMax_iteration_way();
console.log(tree1.DFS_preOrder_iteration());
console.log(tree1.BFS());

tree1.deleteMax_iteration_way();
console.log(tree1.DFS_preOrder_iteration());
console.log(tree1.BFS());

console.log(tree1.size);

console.log('-------------------------------------------');

const tree2 = new BinarySearchTree();
tree2.insert_recurrsion_way(10);
tree2.insert_recurrsion_way(6);
tree2.insert_recurrsion_way(15);
tree2.insert_recurrsion_way(3);
tree2.insert_recurrsion_way(8);
tree2.insert_recurrsion_way(20);
tree2.insert_iteration_way(13);
console.log(tree2.DFS_preOrder_recurrsion());
console.log(tree2.BFS());

tree2.deleteMin_recurrsion_way();
console.log(tree2.DFS_preOrder_recurrsion());
console.log(tree2.BFS());

tree2.deleteMin_recurrsion_way();
console.log(tree2.DFS_preOrder_recurrsion());
console.log(tree2.BFS());

tree2.deleteMax_recurrsion_way();
console.log(tree2.DFS_preOrder_recurrsion());
console.log(tree2.BFS());

tree2.deleteMax_recurrsion_way();
console.log(tree2.DFS_preOrder_recurrsion());
console.log(tree2.BFS());

console.log(tree2.size);
