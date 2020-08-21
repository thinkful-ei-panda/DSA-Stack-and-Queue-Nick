import Stack from './Stack.js';

function main() {
  let stack = new Stack();

  const nums = [
    3425,
    4,
    345,
    34,
    8,
    567,
    1234
  ];

  for (const i in nums)
    stack.push(nums[i]);

  const sorted = sort(stack);

  sorted.display();
}

function sort(stackA) {
  const stackB = new Stack();
  while (stackA.peek() !== null) {
    let tempVar = stackA.pop();
    while (stackB.peek() !== null && tempVar < stackB.peek()) {
      stackA.push(stackB.pop());
    }
    stackB.push(tempVar);
  }
  return stackB;
}

main();