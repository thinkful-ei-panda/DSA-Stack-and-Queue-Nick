import Stack from './Stack.js';

function isPalindrmoe(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let stackForward = new Stack();
  let stackBackward = new Stack();

  for (let i = 0; i < s.length; i++)
    stackForward.push(s[i]);

  for (let i = s.length - 1; i >= 0; i--)
    stackBackward.push(s[i]);

  let forwardNode = stackForward.top;
  let backwardNode = stackBackward.top;

  while (forwardNode !== null) {
    if (forwardNode.data !== backwardNode.data)
      return false;

    forwardNode = forwardNode.next;
    backwardNode = backwardNode.next;
  }

  return true;
}

console.log(isPalindrmoe('dad'));
console.log(isPalindrmoe('A man, a plan, a canal: Panama'));
console.log(isPalindrmoe('1001'));
console.log(isPalindrmoe('Tauhida'));
