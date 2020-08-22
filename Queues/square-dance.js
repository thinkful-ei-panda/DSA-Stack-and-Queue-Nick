import Stack from '../Stacks/Stack.js';
import DLL_Queue from './DLL_Queue.js';

function main() {
  let starTrekQ = new DLL_Queue();

  const characters = [
    {
      name: 'Kirk',
      gender: 'M',
    },
    {
      name: 'Spock',
      gender: 'M',
    },
    {
      name: 'Uhura',
      gender: 'F',
    },
    {
      name: 'Sulu',
      gender: 'F',
    },
    {
      name: 'Checkov',
      gender: 'M',
    },
  ];

  for (const i in characters)
    starTrekQ.enqueue(characters[i]);

  // starTrekQ.display();

  console.log(pairDancers(starTrekQ).display());
}

function pairDancers(dancers) {
  const pairs = new Stack();
  const spares = new DLL_Queue();

  let currentDancer;
  let nextDancer;

  while (dancers.length()) {
    currentDancer = !currentDancer ? (spares.peek() ? spares.dequeue() : dancers.dequeue()) : currentDancer;

    nextDancer = (spares.peek() && spares.peek().data.gender !== currentDancer.data.gender)
      ? spares.dequeue() : dancers.dequeue();

    if (currentDancer && nextDancer) {
      if (currentDancer.data.gender === nextDancer.data.gender)
        spares.enqueue(nextDancer.data);
      else {
        pairs.push({ D1: currentDancer, D2: nextDancer });
        currentDancer = nextDancer = null;
      }
    } else break;

  }
  currentDancer ? spares.enqueue(currentDancer) : '';

  spares.display();
  return pairs;
}


main();