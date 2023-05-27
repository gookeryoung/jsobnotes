---
aliases: 
tags: 
title: ts.函数.剩余参数
date created: 星期五, 五月 26日 2023, 10:13:54 晚上
date modified: 星期五, 五月 26日 2023, 10:17:59 晚上
---

# ts.函数.剩余参数

当需要定义可变参数的函数时，可采用以下方式:

```typescript
function sum(...numbers: number[]): number {
	return numbers.reduce((total, n) => total + n, 0)
} 
console.log(sum(1, 2, 3, 4))
```
