const hello: string = 'Hello, world!';
console.log(hello);

let x: any = 1;
x = 'hello, world!';
console.log(`type of x is ${typeof x}`);
// type of x is string
x = false;
console.log(`type of x is ${typeof x}`);
// type of x is boolean
x = 0.0;
console.log(`type of x is ${typeof x}`);
// type of x is number

const fun = null;
console.log(`fun = ${fun}, type of fun is ${typeof fun}`);
// fun = null, type of fun is object

let y: number | null | undefined;
y = 1; // pass
y = undefined; // pass
y = null; // pass
// y = 'test'; // error: Type 'string' is not assignable to type 'number'.


let a: never;
let b: number;
// a = 123; // error, type 'number' is not assignable to type 'never'.

// pass
function error(msg: string): never {
    throw new Error(msg);
}

let multiType: number | boolean;
multiType = 20; // pass
multiType = true; // pass
// multiType = 'hello'; // error, Type '"hello"' is not assignable to type 'number | boolean'.

// 通过交叉类型将 Employee 和 Manager 交叉成为 ManagementEmployee, 具有二者所有属性
interface Employee {
    id: number;
    age: number;
}

interface Manager {
    name: string;
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;
let manager: ManagementEmployee = {
    id: 123,
    age: 30,
    name: 'Jack',
    stockPlan: true
};

// 创建一个字面量类型
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = 'pass'; // pass
myResult = 'fail'; // pass
// myResult = 'failure'; // error, Type '"failure"' is not assignable to type 'testResult'.

// 数字字面量
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; // pass
// diceRoll = 7; // error

// 类型[]数组
let numbers: number[] = [1, 2, 3];  // pass
//numbers = ['a', 'b', 'c']; // error
let strings: string[] = 'Hello, Jack!'.split(' '); // pass

// Array<type> 数组
let list: Array<number> = [1, 2, 3]; // pass
let words: Array<string> = ['a', 'b']; // pass
console.log(words[1]);

// 元组
let student: [string, number, boolean] = ['mike', 35, true]; // pass
// student = ['jack', 35, false, 1]; // error
// student = ['jack', 35]; error

// 类型别名
type N = number;
type NS = number | string;
let n: N = 1230;
let ns1: NS = '123';
let ns2: NS = 123;

type Student = {
    name: string;
    age: number;
};

type Membership = {
    style?: 'a' | 'b' | 'c';
};

type MS = Student & Membership;
let ms: MS = {
    name: 'jack',
    age: 15,
    style: 'a',
}