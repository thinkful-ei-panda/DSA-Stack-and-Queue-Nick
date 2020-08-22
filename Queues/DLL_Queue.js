export default class DLL_Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  enqueue(data) {
    let node;

    if (!this.head) {
      node = new _Node(data, null, null);
      this.tail = this.head = node;
    }
    else {
      node = new _Node(data, null, this.tail);
      if (this.length() === 1) {
        this.head.next = node;
      }
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.count++;

    return node;
  }

  dequeue() {
    let node = null;

    if (!this.head)
      console.log('queue is empty nothing to dequeue');
    else {
      node = this.head;
      this.head.prev = null;
      this.head = this.head.next;
    }

    this.count = this.count > 0 ? this.count-- : 0;

    return node;
  }

  display() {
    let currNode = this.head;

    while (currNode) {
      console.log(currNode.data);
      currNode = currNode.next;
    }

    if (this.head)
      console.log('head: ', this.head.data);

    if (this.tail)
      console.log('tail: ', this.tail.data);
  }

  length() {
    if (!this.head)
      return 0;
    return this.count;
  }

  peek() {
    if (!this.head)
      return null;
    return this.head;
  }
}

class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}