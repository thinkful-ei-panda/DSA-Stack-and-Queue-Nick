import DLL_Queue from './SLL_Queue.js';

function main() {
  let starTrekQ = new DLL_Queue();

  const characters = [
    'Kirk',
    'Spock',
    'Uhura',
    'Sulu',
    'Checkov'
  ];

  for (const i in characters)
    starTrekQ.enqueue(characters[i]);

  bankSimQueue(starTrekQ);
}

main();

function bankSimQueue(queue) {
  let nextCustomer = queue.head;

  while (nextCustomer !== null) {
    let currentCustomer = queue.dequeue();

    let rollToPass = randInt(100);

    if (rollToPass <= 75) {
      console.log(`${currentCustomer} completed transaction`);
    } else {
      queue.enqueue(currentCustomer);
      console.log(`${currentCustomer} went to the back of the queue`);
    }

    nextCustomer = nextCustomer.next;
  }

}

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

