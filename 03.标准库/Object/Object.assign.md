---
aliases: 
tags: 
title: Object.assign
date created: 星期四, 十一月 24日 2022, 8:39:56 晚上
date modified: 星期四, 十一月 24日 2022, 8:49:51 晚上
---

# Object.assign

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，并返回目标对象。

注意：

- 此操作过程中，所有源对象的内容都不会被改变
- 如果源对象内容存在重叠，后者覆盖前者

## 示例

```javascript
let dest = {};
let o1 = {age: 123};
let o2 = {age: 98, name: 'jack'};

let c = Object.assign(dest, o1, o2, {english: '98'});
console.log(c);
// {age: 98, english: '98', name: 'jack'}
console.log(dest);
// {age: 98, english: '98', name: 'jack'}
console.log(o1);
// {age: 123}
console.log(o2);
// {age: 98, name: 'jack'}
```
