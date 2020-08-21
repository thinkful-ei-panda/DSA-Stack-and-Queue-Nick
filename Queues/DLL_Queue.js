export default class DLL_Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    if (this.head === null) {
      this.head = new _Node(data, null, null);
      this.tail = this.head;
    }
    else {
      const node = new _Node(data, null, this.tail);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.head === null) {
      console.log('queue is empty nothing to dequeue');
    }
    else {
      this.head = this.head.next;
    }
  }

  display() {
    let currNode = this.head;

    while (currNode !== null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }

    if (this.head !== null)
      console.log('head: ', this.head.data);

    if (this.tail !== null)
      console.log('tail: ', this.tail.data);
  }
}

class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}