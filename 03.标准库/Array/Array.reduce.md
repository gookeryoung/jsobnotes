---
aliases: 
tags: 
title: Array.reduce
date created: 星期四, 十一月 17日 2022, 8:39:31 晚上
date modified: 星期六, 十一月 26日 2022, 5:49:39 下午
---

# Array.reduce

`Array.reduce` 函数接受两个参数，一个回调函数和一个初始值。回调函数在数组的每个元素上调用一次，首次调用时返回的是初始值。

```javascript
const schools = ['Yorktown', 'Washington DC', 'Wakefield'];

const ret = schools.reduce((max, str) => (str.length >= max ? str.length : max), 0);
console.log(ret);
// 13
```

```javascript
const arr = [11, 3, 8, 29, 13, 30, 20, 14];
const min = arr.reduce((min, value) => min < value ? min : value, 100);
console.log(min);
// 3

const max = arr.reduce((max, value) => max > value ? max : value, 0);
console.log(max);
// 30
```
