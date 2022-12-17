---
aliases: 
tags: 
title: ts.函数.可选参数
date created: 星期六, 十二月 17日 2022, 9:15:58 晚上
date modified: 星期六, 十二月 17日 2022, 9:20:19 晚上
---

# ts.函数.可选参数

默认情况函数的所有参数均为必须参数，如果缺少则导致编译错误，可以在参数后接 `?` 表示可选参数。

## 示例

```typescript
// 可选参数以及为填写时的处理示例  
const loanCalculator = (principal: number, rate: number, months?: number): number => {  
    let interest = rate / 1200;  
    let payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months ? months : 12)));  
    return Number(payment.toFixed(2));  
}  
console.log(loanCalculator(1000, 5));  
console.log(loanCalculator(1000, 5, 12));  
console.log(loanCalculator(1000, 5, 18));
```
