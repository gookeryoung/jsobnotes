---
aliases: 
tags: 
title: ts.类型.数组
date created: 星期四, 十二月 15日 2022, 8:58:30 晚上
date modified: 星期四, 十二月 15日 2022, 9:04:06 晚上
---

# ts.类型.数组

可以使用 `类型 []` 或者 `Array<type>` 构建一个包含某类型元素的数组。

## 示例

```typescript
// 类型[] 数组
let numbers: number[] = [1, 2, 3];  // pass
numbers = ['a', 'b', 'c']; // error

let strings: string[] = 'Hello, Jack!'.split(' '); // pass
```

```typescript
// Array<type> 数组
let list: Array<number> = [1, 2, 3];
let words: Array<string> = ['a', 'b'];
```
