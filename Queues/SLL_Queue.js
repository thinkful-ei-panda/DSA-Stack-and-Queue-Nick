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

  display() {
    let currentNode = this.top;

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}