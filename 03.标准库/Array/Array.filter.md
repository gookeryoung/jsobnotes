---
aliases: 
tags: 
title: Array.filter
date created: 星期二, 十一月 15日 2022, 9:59:29 晚上
date modified: 星期二, 十一月 15日 2022, 10:12:03 晚上
---

# Array.filter

`Array.filter` 在数组的每个元素上调用断言，将元素作为参数传递给断言，根据返回值决定是否将元素添加到新建的数组中。若断言为真则加入，否则不加入。

注意：

- Array.filter 执行的是不可变操作，对原数组不影响；
- 如果从数组删除元素，不建议使用 `Array.pop` 或者 `Array.splice`，应该使用 `Array.filter`。

## 示例

```javascript
const schools = ['Yorktown', 'Washington DC', 'Wakefield'];

console.log(schools.filter(s => s[0] === 'W'));
// ['Washington DC', 'Wakefield']
console.log(schools.filter(s => s.length >= 10));
// ['Washington DC']
console.log(schools.filter(s => s.includes('to')));
// ['Yorktown', 'Washington DC', 'Wakefield']
console.log(schools.filter(s => s.includes('hello')));
// []
console.log(schools);
// ['Yorktown', 'Washington DC', 'Wakefield']
```

```javascript
const schools = ['Yorktown', 'Washington DC', 'Wakefield'];

const removeSchool = (name, list) => list.filter(s => s !== name);
console.log(removeSchool('Yorktown', schools));
// ['Washington DC', 'Wakefield']
console.log(schools);
// ['Yorktown', 'Washington DC', 'Wakefield']
```

```javascript
const students = [
	{name: 'jack', age: 13},
	{name: 'lee', age: 20},
	{name: 'wang', age: 15},
	{name: 'john', age: 22}
];
const adultStudents = students.filter(s => s['age'] >= 18);
console.log(adultStudents.map(s => s['name']));
// ['lee', 'john']
console.log(students.map(s => s['name']));
// ['jack', 'lee', 'wang', 'john']
```
