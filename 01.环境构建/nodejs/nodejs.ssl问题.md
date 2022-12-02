---
aliases: 
tags: 
title: nodejs.ssl 问题
date created: 星期五, 十二月 2日 2022, 2:46:02 下午
date modified: 星期五, 十二月 2日 2022, 2:47:35 下午
---

# nodejs.ssl 问题

当出现 `error:0308010C:digital envelope routines::unsupported` 问题时，是因为 `node.js V17` 版本中最近发布的 `OpenSSL3.0`, 而 `OpenSSL3.0` 对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.

目前可以通过运行以下命令行临时解决这个问题:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

或者 windows 下设置对应环境变量 `NODE_OPTIONS=--openssl-legacy-provider`。
