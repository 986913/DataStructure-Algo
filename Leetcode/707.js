var MyLinkedList = function() {
  this.head = null;
  this.length = 0;
};

MyLinkedList.prototype.get = function(index) {
  if(index>=this.length) return -1;
  let cur = this.head, i=0;
  while(i!==index) i++, cur = cur.next;
  return cur.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
  let newHead = {val:val};
  newHead.next = this.head;
  this.head = newHead;
  this.length++;
};

MyLinkedList.prototype.addAtTail = function(val) {
  if(this.length===0){
      this.addAtHead(val);
      return;
  }
  let cur = this.head;
  while(cur.next!=null) cur = cur.next;
  let newNode = {val:val};
  newNode.next = null;
  cur.next = newNode;
  this.length++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
if(index>this.length) return;
if(index===this.length){
  this.addAtTail(val);
  return;
}
if(index===0){
  this.addAtHead(val);
  return;
}
let i=0, cur = this.head;
while(i<index-1) i++,  cur = cur.next;
let prev = cur, next = cur?cur.next:null, newNode = {val:val};
newNode.next = next;
prev.next = newNode;
this.length++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index>=this.length) return;
  let i=0, cur = this.head;
  while(i<index-1) i++, cur = cur.next;
  let prev = cur, next = cur.next.next;
  prev.next = next;
  this.length--;
};