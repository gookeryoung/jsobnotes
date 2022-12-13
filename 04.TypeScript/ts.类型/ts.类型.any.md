---
aliases: 
tags: 
title: ts.类型.any
date created: 星期二, 十二月 13日 2022, 9:58:03 晚上
date modified: 星期二, 十二月 13日 2022, 10:01:48 晚上
---

# ts.类型.any

`any` 即任意类型，是 `typescript` 针对编程时对类型不明确的变量采用的一种数据类型。

## 示例

```typescript
let x: any = 1;
x = 'hello, world!';
console.log(`type of x is ${typeof x}`);
// type of x is string
x = false;
console.log(`type of x is ${typeof x}`);
// type of x is boolean
x = 0.0;
console.log(`type of x is ${typeof x}`);
// type of x is number
```
