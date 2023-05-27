---
aliases: 
tags: 
title: ts.函数.生成器
date created: 星期五, 五月 26日 2023, 10:32:46 晚上
date modified: 星期五, 五月 26日 2023, 10:43:14 晚上
---

# ts.函数.生成器

生成器是生成一系列值的便利方式，使用 `yield`，该方式是惰性的，即只有在要求时才计算下一个值。利用生成器可以实现一些特殊操作，例如无穷列表:

```typescript
function* createFibonacciGenerator() {  
	let a = 0  
	let b = 1  
	while (true) {  
		yield a;
		[a, b] = [b, a + b]  
	}  
}  
  
let gen = createFibonacciGenerator()  
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
```
