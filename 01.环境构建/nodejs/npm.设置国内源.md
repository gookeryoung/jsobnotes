---
aliases: 
tags: 
title: npm.设置国内源
date created: 星期日, 三月 19日 2023, 8:14:03 晚上
date modified: 星期日, 三月 19日 2023, 8:15:01 晚上
---

# npm.设置国内源

## 永久设置

```bash
npm config set registry https://registry.npm.taobao.org
```

检查是否可用:

```bash
npm config get registry
```

## 临时设置

```bash
npm --registry https://registry.npm.taobao.org install pack-xxx
```
