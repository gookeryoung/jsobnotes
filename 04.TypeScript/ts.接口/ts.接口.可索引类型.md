---
aliases: 
tags: 
title: ts.接口.可索引类型
date created: 星期五, 三月 31日 2023, 10:27:29 晚上
date modified: 星期五, 三月 31日 2023, 10:31:59 晚上
---

# ts.接口.可索引类型

一般用于描述能够 `通过索引得到` 的类型，例如 `a[10]` 或者 `score['Jack']`，包含了索引类型和返回类型的描述。

## 示例

```typescript
interface StringArray {
	[index: number]: string;
}

let arr: StringArray;
arr = ['Bob', 'Fred'];
let myStr = arr[0];
console.log(myStr);
```
