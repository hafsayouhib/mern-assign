const args = process.argv.slice(2);

const operation = args[0];
const numbers = args.slice(1).map(Number);

if (numbers.some(isNaN)) {
  console.log("Error: Please provide valid numbers.");
  process.exit(1);
}


let result;

switch (operation) {
  case "add":
    result = numbers.reduce((sum, num) => sum + num, 0);
    break;
  case "subtract":
    result = numbers.reduce((difference, num) => difference - num);
    break;
  case "multiply":
    result = numbers.reduce((product, num) => product * num, 1);
    break;
  case "divide":
    result = numbers.reduce((quotient, num) => quotient / num);
    break;
  default:
    console.log("Error: Unsupported operation. Supported operations: add, subtract, multiply, divide.");
    process.exit(1);
}
// The argument you will pass for arrays operation is
// ..npm run hafsa add 5 6 7 ... or
// node index.js subtract 6 7 8 5 4...
//for division
// npm run hafsa divide 2 6 7 5 ...
//for multiplication 
// npm run hafsa multiply 7 8 9 4 3 2 ...

var arrays= console.log(process.argv);
arrays= console.log("result is :",result);


