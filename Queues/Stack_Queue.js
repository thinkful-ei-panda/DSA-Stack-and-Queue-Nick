import Stack from '../Stacks/Stack';

export default class Stack_Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    let fullStack;
    let emptyStack;

    if (this.stack1.top !== null) {
      fullStack = this.stack1;
      emptyStack = this.stack2;
    }
    else if (this.stack2.top !== null) {
      fullStack = this.stack2;
      emptyStack = this.stack1;
    }

    let ptr = fullStack;

    while (ptr !== null) {
      this.emptyStack.push(fullStack.pop());
    }

    this.emptyStack.push(data);
  }

  dequeue() {
    let fullStack;
    let emptyStack;

    if (this.stack1.top !== null) {
      fullStack = this.stack1;
      emptyStack = this.stack2;
    }
    else if (this.stack2.top !== null) {
      fullStack = this.stack2;
      emptyStack = this.stack1;
    }

    let ptr = fullStack;

    while (ptr !== null) {
      this.emptyStack.push(fullStack.pop());
    }

    this.emptyStack.pop();
  }
}