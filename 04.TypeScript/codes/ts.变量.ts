let nickname: string = 'Jacky';
let age: number = 23;
const sum: number = 123.18;
console.log(`${nickname}, ${age}, ${sum}`);

const num1 = new Number(131.2345);
console.log(`fixed: ${num1.toFixed(2)}`);
console.log(`  exp: ${num1.toExponential(1)}`);
console.log(`precs: ${num1.toPrecision(8)}`);
console.log(num1.toString());
console.log(num1.toLocaleString());