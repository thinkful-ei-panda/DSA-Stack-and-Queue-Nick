export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // time complexity O(1)
  enqueue(data) {
    const node = new _Node(data, null);

    if (this.head === null) {
      this.head = node;
    }

    if (this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  // time complexity O(1)
  dequeue() {
    if (this.first === null) {
      console.log('queue is empty cannot dequeue');
      return;
    }

    const node = this.head;
    this.head = this.head.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }

  peek() {
    if (this.head === null)
      return null;
    return this.head.data;
  }

  isEmpty() {
    return (this.head === null);
  }

  display() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }

    if (this.head !== null)
      console.log('head: ', this.head.data);

    if (this.tail !== null)
      console.log('tail: ', this.tail.data);
  }
}

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}