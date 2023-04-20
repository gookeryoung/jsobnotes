interface StringArray {
  [index: number]: string;
}

let arr: StringArray;
arr = ['Bob', 'Fred'];
let s1 = arr[0];
let s2 = arr['0'];
console.log(s1, s2);