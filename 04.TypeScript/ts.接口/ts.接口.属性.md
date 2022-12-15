---
aliases: 
tags: 
title: ts.接口.属性
date created: 星期四, 十二月 15日 2022, 9:59:35 晚上
date modified: 星期四, 十二月 15日 2022, 10:02:21 晚上
---

# ts.接口.属性

接口属性可以是 `必需`、` 可选 `和` 只读 `三种：

- 必需: 所有属性默认是必需的，例如`firstName: string`;
- 可选: 在属性名称末尾添加问号 `?`，可以防止在省略该属性时报错，例如 `firstName?: string`;
- 只读：在属性名称前面添加 `readonly` 关键字，适用于只在首次创建时修改的属性，例如 `readonly firstName: string`。

## 示例

```typescript
interface Student {  
    name: string; // 必须属性  
    nickName?: string; // 可选属性  
    readonly isMale: boolean; // 只读  
}  
  
let student: Student = {  
    name: 'jack',  
    isMale: false  
};
```
