---
aliases: 
tags: 
title: ts.类型.undefined
date created: 星期二, 十二月 13日 2022, 10:06:31 晚上
date modified: 星期二, 十二月 13日 2022, 10:10:13 晚上
---

# ts.类型.undefined

在 `javascript` 中，undefined 是一个没有初始化的对象。

注意：用 typeof 检测 undefined 变量会返回 undefined。

```typescript
let y: number | null | undefined;  
y = 1; // pass
y = undefined; // pass  
y = null; // pass
y = 'test'; // error: Type 'string' is not assignable to type 'number'.
```
