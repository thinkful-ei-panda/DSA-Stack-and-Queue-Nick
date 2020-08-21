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

  starTrek.display();
}

main();