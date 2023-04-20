---
aliases: 
tags: 
title: ts.接口.可索引类型
date created: 星期五, 三月 31日 2023, 10:27:29 晚上
date modified: 星期五, 三月 31日 2023, 10:42:48 晚上
---

# ts.接口.可索引类型

一般用于描述能够 `通过索引得到` 的类型，例如 `a[10]` 或者 `score['Jack']`，包含了索引类型和返回类型的描述。

## 示例

共有支持两种索引签名：字符串和数字。

可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number 来索引时，JavaScript 会将它转换成 string 然后再去索引对象。 也就是说用 100（ number）去索引等同于使用 "100"（string）去索引，因此两者需要保持一致。

```typescript
interface StringArray {  
  [index: number]: string;  
}  
  
let arr: StringArray;  
arr = ['Bob', 'Fred'];  
let s1 = arr[0];  
let s2 = arr['0'];  
console.log(s1, s2);
```
