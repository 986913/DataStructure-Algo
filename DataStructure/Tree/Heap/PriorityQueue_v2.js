/**
  [Priority Queue](https://storm.cis.fordham.edu/~yli/documents/CISC2200Spring15/Graph.pdf) is a commonly used data structure in algorithm problem. 
  Especially useful for **Top K** problem with a huge amount of input data, since it could avoid sorting the whole but keep a fixed-length sorted portion of it.
  Since there is no built-in Priority Queue in JavaScript, in a real interview, you should tell interview saying that "Suppose we already have a Priority Queue Class I can use", there is no time for you to write a Priority Queue from scratch.
  But it is a good coding problem to practice, so please implement a Priority Queue with following interface:
    class PriorityQueue {
      // compare is a function defines the priority, which is the order
      // the elements closer to first element is sooner to be removed.
      constructor(compare) {
      
      }
      
      // add a new element to the queue
      // you need to put it in the right order
      add(element) {

      }

      // remove the head element and return
      poll() {
      
      }

      // get the head element
      peek() {

      }

      // get the amount of items in the queue
      size() {

      }
    }
 */

/*---------------------------- 用例测试1 (Top-k issue) ---------------------------------*/
const pq = new PriorityQueue((a, b) => a - b)// (a, b) => a - b means smaller numbers are closer to index:0，which means smaller number are to be removed sooner
pq.add(5)
pq.add(3)
pq.add(1)
pq.add(4)
pq.add(2)
pq.poll() //1
pq.poll() //2
pq.poll() //3
pq.poll() //4
pq.poll() //5
/*---------------------------- 用例测试2 (Top-k issue) ---------------------------------*/
const pq2 = new PriorityQueue((a, b) => b - a)
pq2.add(1);
pq2.peek();// 1
pq2.size();// 1

pq2.add(3);
pq2.peek();// 3
pq2.size();// 2

pq2.add(4);
pq2.peek();// 4
pq2.size();// 3

pq2.poll() //4
pq2.peek();// 3
pq2.size();// 2

pq2.poll() //3
pq2.poll() //1
pq2.size(); // 0
pq2.poll() // undefined
/*---------------------------- 用例测试3 ---------------------------------*/
const pq3 = new PriorityQueue((a, b) => {
  if (a % 2 === 1 && b % 2 === 1) {
    return b
  } else if (a % 2 === 1){
    return -1
  } else if (b % 2 === 1){
    return 1;
  } else{
    return b-a;
  }
});
pq3.add(0)
pq3.add(1)
pq3.add(2)
pq3.add(3)
pq3.add(4)
pq3.add(5)
pq3.add(6)

pq3.poll() // 5
pq3.poll() // 3
pq3.poll() // 1
pq3.poll() // 6
pq3.poll() // 4
pq3.poll() // 2
/* ------------------------------ Code solution:---------------------------- */
class PriorityQueue { 
  // compare is a function defines the priority, which is the order
  // compare() should return -1 or 1,   -1 means closer to the root.
  constructor(compare) {
    this._compare = compare;
    this.items=[undefined];
  }
  
  _swap(indexI, indexJ){
    [[this.items[indexI]],[this.items[indexJ]]] = [[this.items[indexJ]], [this.items[indexI]]];
  }

  // add a new element to the queue: O(logN)
  add(element) {
    this.items.push(element);
    const index = this.items.length -1;

    // compare with parent over and over again (bubble up)
    while(index > 1){
      const parentIndex = Math.floor(index/2);
      if(this._compare(element, this.items[parentIndex]) < 0){
        this._swap(index, parentIndex); // swap element and it's parent
        index = parentIndex; // update index
      }else{
        break;
      }
    }

    console.log(`add ${element}, now items are ${this.items}`)
  }

  // remove the head element and return: O(NlogN)
  poll() {
    // 1. get the root
    const root = this.items[1];

    // 2. put the last element at root
    const last = this.items.pop();
    this.items[1]=last;

    // 3. then compare root with children iteratively (sink down)
    let index = 1;
    while(index < this.items.length){
      const leftChildIdx = index*2;
      const rightChildIdx = index*2+1;
      const shouldSwapWithLeft = this._compare(this.items[leftChildIdx], this.items[index]) < 0;
      const shouldSwapWithRight = this._compare(this.items[rightChildIdx], this.items[index]) < 0;

      if(shouldSwapWithLeft && shouldSwapWithRight){
        const shouldLeftBeCloserThanRight = this._compare(this.items[leftChildIdx], this.items[rightChildIdx]) < 0;
        if(shouldLeftBeCloserThanRight){
          this._swap(index, leftChildIdx );
          index= leftChildIdx;
        }else {
          this._swap(index, rightChildIdx );
          index=rightChildIdx;
        }
      }else if(shouldSwapWithLeft) {
        this._swap(index, leftChildIdx );
        index= leftChildIdx;
      }else if (shouldSwapWithRight){
        this._swap(index, rightChildIdx );
        index=rightChildIdx;
      }else {
        break
      }
    }
    console.log(`remove root ${root}, now items are ${this.items}`)
    // 4. return the root;
    return root
  }

  // get the head element
  peek() {
    return this.items[0]
  }

  // get the amount of items in the queue
  size() {
    return this.items.length-1
  }
}





// https://www.youtube.com/watch?v=HLsOyZTRa2M&ab_channel=JSer