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
a = (() => {
    throw new Error('exception')
})(); // pass
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