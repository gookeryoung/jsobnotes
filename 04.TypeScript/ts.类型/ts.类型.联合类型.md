---
aliases: 
tags: 
title: ts.类型.联合类型
date created: 星期四, 十二月 15日 2022, 7:47:34 晚上
date modified: 星期四, 十二月 15日 2022, 7:52:32 晚上
---

# ts.类型.联合类型

联合类型可以将描述的值限定在指定的范围内，使用 `|` 分隔每种类型。

## 示例

```typescript
let multiType: number | boolean;
multiType = 20; // pass
multiType = true; // pass
multiType = 'hello'; // error, Type '"hello"' is not assignable to type 'number | boolean'.
```
