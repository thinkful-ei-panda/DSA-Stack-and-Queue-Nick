import Stack from './Stack.js';

function main() {
  let starTrek = new Stack();

  const characters = [
    'Kirk',
    'Spock',
    'McCoy',
    'Scotty'
  ];

  for (const i in characters)
    starTrek.push(characters[i]);

  // peek
  console.log(starTrek.peek());

  // isEmpty
  console.log(starTrek.isEmpty());

  // display
  starTrek.display();
}

main();