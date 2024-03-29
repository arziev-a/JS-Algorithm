class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  } 
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length --;
    if (this.length === 0) this.tail = null;
    return current;
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length ++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while(counter !== index) {
     current = current.next;
      counter++
    }
    return current;
  }
  set(val, index) {
    let foundNode = this.get(index)
    if(!foundNode) return false
    else {
      foundNode.val = val;
    }
    return true;
  }
}

// const a = new SinglyLinkedList
// console.log(a.push(8))
// console.log(a.push(10))
// console.log(a.push(14))
// console.log(a.unshift(1))
// console.log(a.set('helo',1))
