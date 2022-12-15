---
aliases: 元组, tuple
tags: 
title: ts.类型.元组
date created: 星期四, 十二月 15日 2022, 9:05:36 晚上
date modified: 星期四, 十二月 15日 2022, 9:48:05 晚上
---

# ts.类型.元组

可以使用 `[type1, type2, …]` 构建包含有限数量和固定类型的元素，即元组。

注意：不可随意更改元素顺序，也不可多或者少元素。

```typescript
// 元组  
let student: [string, number, boolean] = ['mike', 35, true]; // pass  
// student = ['jack', 35, false, 1]; // error  
// student = ['jack', 35]; error
```
