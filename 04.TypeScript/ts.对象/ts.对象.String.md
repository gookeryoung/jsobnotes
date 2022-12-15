---
aliases:
tags: 
title: ts.对象.String
date created: 星期二, 十二月 13日 2022, 10:33:37 晚上
date modified: 星期四, 十二月 15日 2022, 9:51:44 晚上
---

# ts.对象.String

`String` 对象用于处理文本，其属性包括:

- length：返回字符串的长度；
- constructor: 对创建该对象函数的引用；
- prototype: 允许向对象添加属性和方法。

示例：

```typescript
let str: String = String('Hello, world!');  
console.log(str.length);  
// 13  
console.log(str.constructor)  
// [Function: String]
```

## String.方法

前置条件: `let s1: String = String('Hello'); let s2 = String('World');`

| 方法        | 描述                                 | 示例                         |
| ----------- | ------------------------------------ | ---------------------------- |
| charAt      | 返回指定位置的字符                   | s1.charAt(4); // o           |
| charCodeAt  | 返回指定位置字符的 Unicode 编码      | s1.charCodeAt(4); // 111     |
| concat      | 连接两个或者更多字符串，返回新字符串 | s1.concat(s2); // HelloWorld |
| indexOf     | 返回某个字符在字符串首次出现位置     | s1.indexOf('l'); // 2        |
| lastIndexOf | 返回某个字符在字符串最后出现位置     | s1.lastIndexOf('l'); // 3    |
| match       | 查找一个或多个正则表达式匹配         | s1.match(/el/g); // ['lo']   |
| replace     | 替换与正则表达式匹配的字符           | s1.replace('l', 'x');                             |
