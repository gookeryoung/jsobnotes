---
aliases: 
tags: 
title: Array.map
date created: 星期二, 十一月 15日 2022, 10:14:10 晚上
date modified: 星期二, 十一月 15日 2022, 10:23:09 晚上
---

# Array.map

接受函数作为参数，将函数在数组的每个元素上调用一次，不管返回什么都添加到新的数组中。

## 示例

```javascript
const schools = ['Yorktown', 'Washington DC', 'Wakefield'];

console.log(schools.map(s => `${s} High School`));
// ['Yorktown High School', 
//  'Washington DC High School',
//  'Wakefield High School']

schools.map(s => console.log(s));
// Yorktown
// Washington DC
// Wakefield
// [undefined, undefined, undefined] 返回值undefined进入到新建的数组中
```

```javascript
const schools = ['Yorktown', 'Washington DC', 'Wakefield'];

console.log(schools.map(s => s.split('').filter(x => x !== ' ').join('-')));
// ['Y-o-r-k-t-o-w-n', 'W-a-s-h-i-n-g-t-o-n-D-C', 'W-a-k-e-f-i-e-l-d']
```
