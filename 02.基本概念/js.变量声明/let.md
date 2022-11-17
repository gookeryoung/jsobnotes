---
aliases: 
tags: 
title: let
date created: 星期四, 十一月 17日 2022, 9:20:32 晚上
date modified: 星期四, 十一月 17日 2022, 9:26:09 晚上
---

# let

`let` 关键字用于限制变量作用域，可以保护全局变量的值。

## 示例

var 不能保护全局变量:

```javascript
var student = 'Jack';

if (student) {
	var student = 'Lee';
	console.log('block', student);
}
console.log('global', student);
// block Lee
// global Lee
```

let 可以保护全局变量:

```javascript
var student = 'Jack'
if (student) {
	let student = 'Lee';
	console.log('block', student);
}
console.log('global', student);
// block Lee
// global Jack
```
