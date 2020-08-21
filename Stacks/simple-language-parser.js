import Stack from './Stack.js';

function parse(s) {
  let stack = new Stack();

  for (const i in s) stack.push(s[i]);

  let currentNode = stack.top;
  let parenthesis = 0;

  while (currentNode) {
    if (currentNode.data === '(')
      parenthesis++;
    if (currentNode.data === ')')
      parenthesis--;

    currentNode = currentNode.next;
  }

  if (parenthesis === 0) {
    return true;
  }
  if (parenthesis > 0) {
    console.log(`missing ${parenthesis} ")"`);
    return false;
  }
  if (parenthesis < 0) {
    console.log(`missing ${parenthesis * -1} "("`);
    return false;
  }

}

/*Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; 
"([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). 
If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets 
aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.*/

console.log(parse('(shut the door)'));
console.log(parse('(shut the doors?))))))).'));
console.log(parse('(((hodor'));
