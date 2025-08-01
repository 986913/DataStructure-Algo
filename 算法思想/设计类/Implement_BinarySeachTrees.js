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
  /* 二分搜索树的插入元素: 迭代和递归两种方式----------------------------------------------------------------------------- --------- */
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

  /* 二分搜索树的查询-： 迭代和递归两种方式--------------------------------------------------------------------------------- ------- */
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

  /* DFS: PreOrder: ---------中结点 ---> 左子树 ---> 右子树--------------------------------------------------------------- ----------------------------*/
  DFS_preOrder_recurrsion() {
    let visited = [];

    const helper = (node) => {
      if (!node) return;

      visited.push(node.value); //中， change outside variable
      /* change recurrsion's input: */
      if (node.left) helper(node.left); // 左
      if (node.right) helper(node.right); // 右
    };

    helper(this.root);
    return visited;
  }
  DFS_preOrder_iteration() {
    // 前序遍历：中左右;  压栈顺序：右左中

    const visited = [];
    const stack = [];

    if (this.root) stack.push(this.root);

    while (stack.length) {
      const curr = stack.pop();

      if (!curr) {
        let node = stack.pop();
        visited.push(node.value);
        continue;
      }

      if (curr.right) stack.push(curr.right); // 右
      if (curr.left) stack.push(curr.left); // 左
      stack.push(curr); // 中
      stack.push(null);
    }
    return visited;
  }
  /* DFS: InOrder：  -------------左子树---> 中结点 ---> 右子树--------------------------------------------------------------------------- ------------------*/
  DFS_inOrder_recurrsion() {
    let visited = [];

    const helper = (node) => {
      if (!node) return;

      if (node.left) helper(node.left); // 左
      visited.push(node.value); // 中
      if (node.right) helper(node.right); //右;
    };

    helper(this.root);
    return visited;
  }

  DFS_inOrder_iteration() {
    //  中序遍历：左中右,  压栈顺序：右中左

    const visited = [];
    const stack = [];

    if (this.root) stack.push(this.root);

    while (stack.length) {
      const curr = stack.pop();

      if (!curr) {
        let node = stack.pop();
        visited.push(node.value);
        continue;
      }

      if (curr.right) stack.push(curr.right); // 右
      stack.push(curr); // 中
      stack.push(null);
      if (curr.left) stack.push(curr.left); // 左
    }
    return visited;
  }
  /* DFS: PostOrder:  -------------左子树 ---> 右子树 ---> 中结点-------------------------------------------------------------------------- ------------------*/
  DFS_postOrder_recurrsion() {
    let visited = [];

    const helper = (node) => {
      if (!node) return;

      if (node.left) helper(node.left); //左
      if (node.right) helper(node.right); // 右
      visited.push(node.value); //中
    };

    helper(this.root);
    return visited;
  }
  DFS_postOrder_iteration() {
    // 后续遍历：左右中,   压栈顺序：中右左
    const visited = [];
    const stack = [];

    if (this.root) stack.push(this.root);

    while (stack.length) {
      const curr = stack.pop();

      if (!curr) {
        let node = stack.pop();
        visited.push(node.value);
        continue;
      }

      stack.push(curr); // 中
      stack.push(null);
      if (curr.right) stack.push(curr.right); // 右
      if (curr.left) stack.push(curr.left); // 左
    }

    return visited;
  }

  /* BFS：迭代（use Queue）-----https://coding.imooc.com/lesson/207.html#mid=13471------------------------------------- */
  BFS() {
    if (this.root === null) return [];

    let visited = [];
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();
      visited.push(node.value);
      //先左后右：
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /*上面的BFS重要(实用) */
  BFS_V2() {
    if (this.root === null) return [];

    let visited = [];
    let queue = [this.root];

    while (queue.length) {
      let len = queue.length; // 记录当前层级节点数
      let curLevel = []; //curLevel用于存放每一层的节点

      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        curLevel.push(node.value);
        if (node.left) queue.push(node.left); // 存放当前层的下一层的节点到queue
        if (node.right) queue.push(node.right); // 存放当前层的下一层的节点到queue
      }

      visited.push(curLevel); //把每一层的结果放到结果数组
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

  /* find the Min node's value (based on when node is the root) ------------------------------------------------------------------------------------- ----------------------- */
  findMin_iteration_way(node) {
    if (!node) return null;

    let curr = node;
    while (curr.left) {
      curr = curr.left;
    }
    return curr; //or return curr.value
  }
  findMin_recurrsion_way(node) {
    if (!node) return null;
    const helper = (nodee) => {
      // or return nodee.value
      if (nodee.left === null) return nodee;
      else return helper(nodee.left);
    };
    return helper(node);
  }

  /* find the Max node's value (based on when node is the root) ---------------------------------------------------------------- -------------------------------------------- */
  findMax_iteration_way(node) {
    if (!node) return null;

    let curr = node;
    while (curr.right) {
      curr = curr.right;
    }
    return curr; //or return curr.value
  }
  findMax_recurrsion_way(node) {
    if (!node) return null;
    const helper = (nodee) => {
      //or return nodee.value
      if (nodee.right === null) return nodee;
      else return helper(nodee.right);
    };
    return helper(node);
  }

  /* 查看是否是叶子节点 ------------------------------------------------------------------------ */
  isLeaf(node) {
    if (!node) return null;
    return !node.left && !node.right;
  }

  /* Del the Min node  (based on when node is the root) ------------------------------------------------------------------ ------------------------------------------  */
  deleteMin_iteration_way(node) {
    //1. find the min node
    if (!node) return null;
    let curr = node;
    let parentNode = node;
    while (curr.left) {
      parentNode = curr;
      curr = curr.left;
    }
    // console.log(curr, parentNode); --> curr is the min node, parentNode is the parent of min node
    //2. check if it's a leaf node?  if it's a leaf, delete it directly, otherwise, make it right node refer to his parent node's left node.
    if (this.isLeaf(curr)) parentNode.left = null;
    else parentNode.left = curr.right;
    this.size--;
    return node;
  }
  deleteMin_recurrsion_way(node) {
    if (!node) return null;
    let perserveNode = node; // use for save node, as return after deleted Min
    let parentNode = node;

    const helper = (nodee) => {
      if (!nodee.left) {
        // console.log(nodee, parentNode);  nodee is the min node, parentNode is the parent of min node here
        if (this.isLeaf(nodee)) parentNode.left = null;
        else parentNode.left = nodee.right;

        this.size--;
        return perserveNode;
      } else {
        parentNode = nodee;
        return helper(nodee.left);
      }
    };
    return helper(node);
  }

  /* Del the Max node (based on when node is the root) ---------------------------------------------------------------------- --------------------------------------  */
  deleteMax_iteration_way(node) {
    //  1. find the max node
    if (!node) return null;

    let curr = node;
    let parentNode = node;
    while (curr.right) {
      parentNode = curr;
      curr = curr.right;
    }
    // console.log(curr, parentNode); --> curr is the max node, parentNode is the parent of max node

    //2. check if it's a leaf node?  if it's a leaf, delete it directly, otherwise, make it left node refer to his parent node's right node.
    if (this.isLeaf(curr)) parentNode.right = null;
    else parentNode.right = curr.left;

    this.size--;
    return node;
  }
  deleteMax_recurrsion_way(node) {
    if (!node) return null;
    let parentNode = node;
    let perserveNode = node;

    const helper = (nodee) => {
      if (!nodee.right) {
        // console.log(nodee, parentNode);  nodee is the max node, parentNode is the parent of max node here
        if (this.isLeaf(nodee)) parentNode.right = null;
        else parentNode.right = nodee.left;

        this.size--;
        return perserveNode;
      } else {
        parentNode = nodee;
        return helper(nodee.right);
      }
    };
    return helper(node);
  }

  /* remove 任意一个节点 -----https://coding.imooc.com/lesson/207.html#mid=13477---------------------------------------------------------------  */
  remove(node, val) {
    //删除已node为根的二分搜索树中值为val的节点，返回删除节点后新的二分搜索树的根
    const helper = (nodee, val) => {
      if (nodee == null) return null;

      if (nodee.value > val) {
        nodee.left = helper(nodee.left, val);
        return nodee;
      } else if (nodee.value < val) {
        nodee.right = helper(nodee.right, val);
        return nodee;
      } else {
        // nodee.value === val
        //删除只有右子树的node
        if (nodee.left === null) {
          let rightNode = nodee.right;
          nodee.right = null;
          this.size--;
          return rightNode;
        }
        //删除只有左子树的node
        if (nodee.right === null) {
          let leftNode = nodee.left;
          nodee.left = null;
          this.size--;
          return leftNode;
        }
        //删除有左子树和右子树的node
        /* 1.找到比待删除节点大的最小node ==> 就是待删除节点的右子树中最小的node */
        let successor = this.findMin_iteration_way(nodee.right);
        // console.log(successor); // successor就是用来代替即将删除的节点的

        /* 2.用这个节点顶替待删除节点的位置 */
        successor.right = this.deleteMin_iteration_way(nodee.right);
        successor.left = nodee.left;

        nodee.left = null;
        nodee.right = null;

        this.root = successor; // this is optional,
        return successor;
      }
    };

    const theRootAfterRemove = helper(node, val);
    return theRootAfterRemove;
  }

  /* floor:   find the node's maximumn value < val (based on when node is the root)------------------------------------------------------------------ ------------------------------------ */
  floor(node, inputVal) {
    // Base case
    if (node === null) {
      return -1;
    }

    // We found equal key
    if (node.value === inputVal) return node.value;

    // If node's key is larger, floor must be in left subtree
    if (node.value > inputVal) return this.floor(node.left, inputVal);

    // Else, either right subtree or root has the floor value
    let floorValue = this.floor(node.right, inputVal);

    return floorValue <= inputVal && floorValue !== -1
      ? floorValue
      : node.value;
  }

  /* find ceil:  find the node's minimun value > val(based on when node is the root) --------------------------------------------------------------- ------ */
  ceil(node, inputVal) {
    // Base case
    if (node === null) return -1;

    // We found equal key
    if (node.value === inputVal) return node.value;

    // If root's key is smaller, ceil must be in right subtree
    if (node.value < inputVal) {
      return this.ceil(node.right, inputVal);
    }

    // Else, either left subtree or root has the ceil value
    let ceil = this.ceil(node.left, inputVal);

    return ceil >= inputVal ? ceil : node.value;
  }

  /* rank */
  rank() {}
  /* select */
  select() {}
}

const tree1 = new BinarySearchTree();
tree1.insert_iteration_way(10);
tree1.insert_iteration_way(6);
tree1.insert_iteration_way(15);
tree1.insert_iteration_way(3);
tree1.insert_iteration_way(8);
tree1.insert_iteration_way(20);
tree1.insert_iteration_way(13);

//DFS前序遍历： 根结点 ---> 左子树 ---> 右子树
console.log('DFS - preOrder(recurrsion)', tree1.DFS_preOrder_recurrsion()); // [10, 6, 3, 8, 15, 13, 20]
console.log('DFS - preOrder(iteration)', tree1.DFS_preOrder_iteration()); // [10, 6, 3, 8, 15, 13, 20]

//DFS中序遍历： 左子树---> 根结点 ---> 右子树
console.log('DFS - inOrder(recurrsion)', tree1.DFS_inOrder_recurrsion()); //[3, 6, 8, 10, 13, 15, 20]
console.log('DFS - inOrder(iteration)', tree1.DFS_inOrder_iteration()); //[3, 6, 8, 10, 13, 15, 20]

//DFS后序遍历： 左子树 ---> 右子树 ---> 根结点
console.log('DFS - postOrder(recurrsion)', tree1.DFS_postOrder_recurrsion()); // [3, 8, 6, 13, 20, 15, 10]
console.log('DFS - postOrder(iteration)', tree1.DFS_postOrder_iteration()); // [3, 8, 6, 13, 20, 15, 10]

//BFS层级便利
console.log('BFS - (ONLY iteration - queue)', tree1.BFS()); //[10, 6, 15, 3, 8, 13, 20]
console.log('BFS - (ONLY iteration - queue)', tree1.BFS_V2()); //[ [10], [6，15], [3，8，13，20] ]

// console.log(
//   tree1.findMax_iteration_way(tree1.root),
//   tree1.findMax_recurrsion_way(tree1.root)
// );
// console.log(
//   tree1.findMin_iteration_way(tree1.root),
//   tree1.findMin_recurrsion_way(tree1.root)
// );

// console.log(tree1.deleteMin_iteration_way(tree1.root));
// console.log(tree1.DFS_preOrder_iteration());
// console.log(tree1.BFS());

// console.log(tree1.deleteMin_iteration_way(tree1.root));
// console.log(tree1.DFS_preOrder_iteration());
// console.log(tree1.BFS());

// console.log(tree1.deleteMax_iteration_way(tree1.root));
// console.log(tree1.DFS_preOrder_iteration());
// console.log(tree1.BFS());

// console.log(tree1.deleteMax_iteration_way(tree1.root));
// console.log(tree1.DFS_preOrder_iteration());
// console.log(tree1.BFS());

// console.log(tree1.remove(tree1.root, 10));
// console.log(tree1.BFS());
// console.log(tree1.remove(tree1.root, 13));

// console.log(tree1.floor(tree1.root, 14)); //13
// console.log(tree1.floor(tree1.root, 7)); //6
// console.log(tree1.floor(tree1.root, 17)); //15
// console.log(tree1.ceil(tree1.root, 14)); //15
// console.log(tree1.ceil(tree1.root, 5)); //6

// console.log(tree1.size);
