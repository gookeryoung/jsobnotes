---
aliases: 
tags: 
title: Object.keys
date created: 星期二, 十一月 15日 2022, 9:43:12 晚上
date modified: 星期二, 十一月 15日 2022, 9:58:49 晚上
---

# Object.keys

从对象获取所有的 `键`，返回由 ` 键`构成的数组。

## 示例

```javascript
const scores = {
	math: 90,
	english: 120,
	chinese: 109
};

const keys = Object.keys(scores);
console.log(keys);
// ['math', 'english', 'chinese']
const studies = Object.keys(scores).filter(
	key => scores[key] > 110
);
console.log(studies);
// ['english']
```

```javascript
const schools = {
	Yorktown: 10,
	'Washington': 2,
	Wakefield: 5
};

const schoolLocations = Object.keys(schools);
console.log(schoolLocations);
// ['Yorktown', 'Washington', 'Wakefield']

const schoolArray = schoolLocations.map(key => ({
	name: key,
	distance: schools[key]
}));
console.log(schoolArray);
// [
//   {name: 'Yorktown', distance: 10},
//   {name: 'Washington', distance: 2},
//   {name: 'Wakefield', distance: 5}
// ]
```
