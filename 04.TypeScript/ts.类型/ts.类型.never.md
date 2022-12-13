---
aliases: 
tags: 
title: ts.类型.never
date created: 星期二, 十二月 13日 2022, 10:11:08 晚上
date modified: 星期二, 十二月 13日 2022, 10:16:59 晚上
---

# ts.类型.never

never 类型是 null 和 undefined 的子类型，代表从来不会出现的值。

这意味着声明为 never 类型的变量只能被 never 类型所赋值，一般用于函数中表示抛出异常或者无法执行到终止点（如无限循环）。

```typescript
let a: never;
let b: number;
a = (() => {throw new Error('exception')})(); // pass
a = 123; // error, type 'number' is not assignable to type 'never'.

// pass
function error(msg: string): never {
	throw new Error(msg);
}
```
