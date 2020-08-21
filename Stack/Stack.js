export default class Stack {
  constructor() {
    this.top = null;
  }

  // time complexity O(1)
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  // time complexity O(1)
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  // time complexity O(1)
  peek() {
    return this.top.data;
  }

  // time complexity O(1)
  isEmpty() {
    return Boolean(!this.top);
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