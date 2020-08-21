import Stack_Queue from './SLL_Queue.js';

function main() {
  let starTrekQ = new Stack_Queue();

  const characters = [
    'Kirk',
    'Spock',
    'Uhura',
    'Sulu',
    'Checkov'
  ];

  for (const i in characters)
    starTrekQ.enqueue(characters[i]);

  starTrekQ.dequeue();

  starTrekQ.display();
}

main();