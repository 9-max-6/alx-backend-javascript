const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Welcome to Holberton School, what is your name? ", (yourName) => {
  console.log(`Hello, ${yourName}!`);
  rl.close();
});
