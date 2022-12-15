---
aliases: 接口
tags: 
title: ts.接口
date created: 星期四, 十二月 15日 2022, 9:27:56 晚上
date modified: 星期四, 十二月 15日 2022, 9:37:26 晚上
---

# ts.接口

`typescript` 的核心原则之一是，检查相关值具有的形状，也被称为 `鸭子类型` 或者 `结构子类型`。

可以使用 ` 接口`描述对象、命名和参数化对象的类型，以及将现有的命名对象类型组成新的对象类型。

以下接口定义了 `Employ` 对象的两个属性和一个方法:

```typescript
interface Employee {
	firstName: string;
	lastName: string;
	
	fullName(): string;
}
```

定义接口以后可以使用 `Intellisense` 等 IDE 辅助功能对类型进行判断，能够提前发现潜在的代码错误。

注意：

- 接口只负责描述，不会初始化或者实现其属性；
- 要区分接口和[[ts.类型.类型别名|类型别名]]，接口是可扩展的，而别名无法添加新的属性；
