---
aliases: 
tags: 
title: const
date created: 星期四, 十一月 17日 2022, 9:17:04 晚上
date modified: 星期四, 十一月 17日 2022, 9:19:58 晚上
---

# const

`const` 是常量关键字，一旦声明，其值不能再更改。

如果尝试覆盖常量值，控制台会报错 `Uncaught TypeError`。

## 示例

```javascript
var pizza = true;
pizza = false;
console.log(pizza);
// false

const noodle = true;
noodle = false;
// Uncaught TypeError: Assignment to constant variable.
```
