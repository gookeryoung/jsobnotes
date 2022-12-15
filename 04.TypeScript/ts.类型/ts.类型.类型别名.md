---
aliases: 类型别名
tags: 
title: ts.类型.类型别名
date created: 星期四, 十二月 15日 2022, 9:37:44 晚上
date modified: 星期四, 十二月 15日 2022, 9:47:27 晚上
---

# ts.类型.类型别名

类型别名是数据类型（例如联合、基元、交集、[[ts.类型.元组|元组]]或其他任何类型）的定义。

## 示例

```typescript
// 类型别名  
type N = number;  
type NS = number | string;  
let n: N = 1230;  
let ns1: NS = '123';  
let ns2: NS = 123;  
  
type Student = {  
    name: string;  
    age: number;  
};  
  
type Membership = {  
    style?: 'a' | 'b' | 'c';  
};  
  
type MS = Student & Membership;  
let ms: MS = {  
    name: 'jack',  
    age: 15,  
    style: 'a',  
}
```
