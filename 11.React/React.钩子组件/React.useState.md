---
aliases: 
tags: 
title: React.useState
date created: 星期六, 十二月 17日 2022, 2:10:42 下午
date modified: 星期五, 三月 31日 2023, 10:19:31 晚上
---

# React.useState

在 React 源码中，useState 有两个函数。第一个方法接一个名为 S 的 TypeScript 泛型，通过它，我们可以定义 state 的变量类型。第二个函数重写（override）了第一个函数，使我们可以在调用 useState 时不直接声明 state 变量类型。

以下是在 TypeScript 中使用 useState 的例子:

```typescript
import React, {useState} from 'react'

export default function App() {
  const [name, setName] = useState<string>('未定义变量')
  const [age, setAge] = useState<number>(28)
  const [isProgrammer, setIsProgrammer] = useState<boolean>(true)

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Programmer: {isProgrammer ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  )
}
```

还可以用 [[ts.接口|接口]] 作为 useState 变量类型：

```typescript
interface IChampion {
  id: number;
  name: string;
  type: string;
}

export default function Champions() {
  const [champions, setChampions] = useState<IChampion[]>([
    {
      id: 1,
      name: '蔡文姬',
      type: '辅助'
    },
    {
      id: 2,
      name: '后裔',
      type: '射手'
    },
    {
      id: 3,
      name: '鲁班7号',
      type: '射手'
    }
  ])

  return (
    <div>
      <ul>
        {champions.map(champion=> (
          <li key={champion.id}>{champion.name} - {champion.type}</li>
        ))}
      </ul>
    </div>
  )
}
```
