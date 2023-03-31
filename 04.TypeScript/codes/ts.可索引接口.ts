interface StringArray {
  [index: number]: string;
}

let arr: StringArray;
arr = ['Bob', 'Fred'];
let myStr = arr[0];
console.log(myStr);