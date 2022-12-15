---
aliases: 
tags: 
title: ts.类型.字面类型
date created: 星期四, 十二月 15日 2022, 8:47:40 晚上
date modified: 星期四, 十二月 15日 2022, 8:58:00 晚上
---

# ts.类型.字面类型

可以将 `string`、`number` 和 `boolean` 收缩为字面类型，用有限的选项替代无限的可能性。

字面量类型以对象、数组、函数或构造函数类型字面量的形式编写，用于将其他类型组合为新类型。

## 示例

演示使用字面量类型的最佳方法是使用示例。 此类型定义创建一个称为 `testResult` 的字面量类型，它可以包含三个 `string` 值之一：

```typescript
type testResult = "pass" | "fail" | "incomplete";  
let myResult: testResult;  
myResult = 'pass'; // pass  
myResult = 'fail'; // pass  
myResult = 'failure'; // error, Type '"failure"' is not assignable to type 'testResult'.
```

还可以使用数字字面量:

```typescript
type dice = 1 | 2 | 3 | 4 | 5 | 6;  
let diceRoll: dice;  
diceRoll = 1; // pass  
diceRoll = 7; // error
```
