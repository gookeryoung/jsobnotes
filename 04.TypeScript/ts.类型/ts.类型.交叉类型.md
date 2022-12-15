---
aliases: 
tags: 
title: ts.类型.交叉类型
date created: 星期四, 十二月 15日 2022, 7:57:52 晚上
date modified: 星期四, 十二月 15日 2022, 8:11:22 晚上
---

# ts.类型.交叉类型

交叉类型用于组合两个或者多个类型以创建具有现有类型所有属性的新类型，使用 `&` 符号连接每种类型。

交叉类型通常与接口一起使用。

## 示例

```typescript
// 通过交叉类型将 Employee 和 Manager 交叉成为 ManagementEmployee, 具有二者所有属性  
interface Employee {  
    id: number;  
    age: number;  
}  
  
interface Manager {  
    name: string;  
    stockPlan: boolean;  
}  
  
type ManagementEmployee = Employee & Manager;  
let manager: ManagementEmployee = {  
    id: 123,  
    age: 30,  
    name: 'Jack',  
    stockPlan: true  
};
```
