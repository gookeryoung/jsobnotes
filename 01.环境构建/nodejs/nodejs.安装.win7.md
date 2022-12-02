---
aliases: 
tags: 
title: nodejs.安装.win7
date created: 星期五, 十二月 2日 2022, 2:16:28 下午
date modified: 星期五, 十二月 2日 2022, 2:21:36 下午
---

# nodejs.安装.win7

win7 系统默认情况下只能安装 node13 及以下版本，安装 node14 以上版本时会弹出需要更高版本的错误。

需要直接采用官方 zip 压缩包进行安装。

## 下载安装

在 [官方网站](https://nodejs.org/en/download/) 下载最新版 node 的 zip 文件，注意对应平台（win32/win64）。

解压到特定文件目录 (例如:`C:\Environment\node-v18.12.1-win-x86\`)，并且添加到环境变量中。

检查是否安装成功:

```bash
> node
> Welcome to node.js v18.12.1
> ....
```

## 设置环境变量

新增环境变量 `NODE_SKIP_PLATFORM_CHECK` 并设置为 `1`，即可跳过检查。
