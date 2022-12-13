let str: String = String('Hello, world!');
console.log(str.length);
// 13
console.log(str.constructor)
// [Function: String]

let s1: string = 'Hello';
let s2: string = 'World';
console.log(s1.charAt(4));
// o
console.log(s1.charCodeAt(4));
// 111
console.log(s1.concat(', ', s2, '!'));
// Hello, World!
console.log(s1.indexOf('l'));
// 2
console.log(s1.lastIndexOf('l'));
// 3
console.log(s1.match(/lo/g));
// ['lo']
console.log(s1.replace(/ll/g, 'xx'));
// Hexxo
console.log(s1.replace('l', 'x'));
// Hexlo
console.log(s1.replace(/l/g, 'x'));
// Hexxo