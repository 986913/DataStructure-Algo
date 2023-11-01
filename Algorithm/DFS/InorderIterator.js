/**
  We are given the root node of a binary tree. 
  We have to write an iterator that takes in this root and iterates through the nodes of a binary tree in an in-order way. 
  The expectation is to write two critical methods of any iterator: hasNext() and getNext(). 
 */

/*-------------- 用例测试 --------------------- */
let inorderUsingIterator = function (root) {
  let iter = new InorderIterator(root);
  let result_str = '';
  while (iter.hasNext()) {
    let ptr = iter.getNext();
    result_str += ptr.data + ' ';
  }
  return result_str;
};

let root = insert(null, 100);
insert(root, 50);
insert(root, 200);
insert(root, 25);
insert(root, 75);
insert(root, 125);
insert(root, 300);
insert(root, 12);
insert(root, 35);
insert(root, 60);
console.log('Inorder Iterator = ' + inorderUsingIterator(root)); // Inorder Iterator = 12 25 35 50 60 75 100 125 200 300

/*------------------------ Solution -------------------------- */
class InorderIterator {
  constructor(root) {
    this.stk = [];
    // Assuming that when iterator is initialized
    // it is always at the first element of tree in its in-order
    this.populateIterator(root);
  }

  populateIterator(root) {
    while (root) {
      this.stk.push(root);
      root = root.left;
    }
  }

  hasNext() {
    if (!this.stk || this.stk.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  // getNext returns null if there are no more elements in tree
  getNext() {
    if (!this.stk || this.stk.length === 0) {
      return null;
    }

    let r_val = this.stk.pop();
    // this.stk.remove(-1)
    let temp = r_val.right;
    this.populateIterator(temp);

    return r_val;
  }
}
