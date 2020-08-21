import SLL_Queue from './SLL_Queue.js';

function main() {
  let starTrekQ = new SLL_Queue();

  const characters = [
    'Kirk',
    'Spock',
    'Uhura',
    'Sulu',
    'Checkov'
  ];

  for (const i in characters)
    starTrekQ.enqueue(characters[i]);

  console.log('peek(): ', starTrekQ.peek());

  console.log('isEmpty(): ', starTrekQ.isEmpty());

  removeFromQueue('Checkov', starTrekQ);

  starTrekQ.display();
}

function removeFromQueue(itemToRemove, queue) {
  let tempNode = queue.head;
  let prevNode = queue.head;

  if (tempNode === queue.tail) {
    queue.head = null;
    queue.tail = null;
    return null;
  }

  while (tempNode !== null && tempNode.data !== itemToRemove) {
    prevNode = tempNode;
    tempNode = tempNode.next;
  }

  if (tempNode === null) {
    console.log(`${itemToRemove} is not in queue`);
    return null;
  }

  if (tempNode === queue.head) {
    queue.head = tempNode.next;
  }
  if (tempNode === queue.tail) {
    queue.tail = prevNode;
  }

  prevNode.next = tempNode.next;
}

main();