---
aliases: 
tags: 
title: Array.concat
date created: 星期四, 十一月 24日 2022, 8:31:56 晚上
date modified: 星期四, 十一月 24日 2022, 8:52:29 晚上
---

# Array.concat

`Array.concat` 的作用是拼接数组，是 [[不可变函数]]。

## 示例

```javascript
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];

const arr = arr1.concat(arr2);
console.log(arr);
// [1, 2, 3, 'a', 'b', 'c']
console.log(arr1);
// [1, 2, 3]
console.log(arr2);
// ['a', 'b', 'c']
```
