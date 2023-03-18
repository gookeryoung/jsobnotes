---
aliases: 
tags: 
title: ts.编码规范
date created: 星期六, 三月 18日 2023, 8:39:33 早上
date modified: 星期六, 三月 18日 2023, 8:26:48 晚上
---

# ts.编码规范

## 命名规范

- 使用 PascalCase 为类型命名
- 不要使用 I 做为 [[ts.接口|接口]] 名前缀
- 使用 PascalCase 为枚举值命名
- 使用 camelCase 为函数命名
- 使用 camelCase 为属性或本地变量命名
- 不要为私有属性名添加 _ 前缀
- 尽可能使用完整的单词拼写命名

### 变量

变量使用 camelCase 方式命名。

```typescript
// Bad
const Foo = 1

// Good
const foo = 1

// Bad
const UserList: string[] = []

// Good
const userList: string[] = []
```

### 函数

函数使用 camelCase 方式命名。

```typescript
// Bad
function Foo() {}

// Good
function foo() {}
```

### 类

类本身使用 PascalCase 方式命名，类成员使用 camelCase 方式命名。

```typescript
// Bad
class foo {}

// Good
class Foo {}

// Bad
class Foo {
	Bar: number;
	Baz(): number {}
}

// Good
class Foo {
	bar: number;
	baz(): number {}
}
```

### 接口

[[ts.接口|接口]] 本身使用 PascalCase 方式命名，不要在 [[ts.接口|接口]] 名前加 `I`。接口成员使用 camelCase 方式命名。

```typescript
// Bad
interface IFoo {
	Bar: number;
	Baz(): number;
}

// Good
interface Foo {
	bar: number;
	baz(): number;
}
```

为什么不使用 `I` 前缀命名 [[ts.接口|接口]]?

在 TS 中，类可以实现 [[ts.接口|接口]]，接口可以继承接口，接口可以继承类。类和接口都是某种意义上的抽象和封装，继承时不需要关心它是一个接口还是一个类。如果用 `I` 前缀，当一个变量的类型更改了，比如由接口变成了类，那变量名称就必须同步更改。

### 枚举

枚举对象本身和枚举成员都使用 PascalCase 方式命名。

```typescript
// Bad
enum status {}

// Good
enum Status{}

// Bad
enum Status {
	success = 'success'
}

// Good
enum Status {
	Success = 'success'
}
```

### 文件名

普通 ts 文件与 React 组件通过文件名区分，React 组件必须用 `tsx` 作为后缀。

- 使用 `camelCase` 为函数等以动词开头的文件命名，比如 `getName.ts`、`fetchData.ts`
- 类等以名词开头的文件名一般有两种命名方式：
	- 使用 PascalCase 命名，比如 `UserList.ts`。
	- 使用破折号分隔描述性单词命名，比如 `user-list.ts`。

这两种命名方式都被允许，但是一个项目中只能用其中一种。

## 类型声明规范

在进行类型声明时应尽量依靠 ts 的自动类型推断功能，如果能够**推断出**正确类型尽量**不要**再手动声明。

### 变量

基础类型变量不需要手动声明类型。

```typescript
let foo = 'foo'
let bar = 2
let baz = false
```

引用类型变量应该保证类型正确，不正确的需要手动声明。

```typescript
// 自动推断
let foo = [1, 2] // number[]

// 显示声明
// Bad
let bar = [] // any[]

// Good
let bar:number[] = []
```

### 函数

#### 回调函数类型

不要为返回值会被忽略的回调函数设置返回值类型 `any`, 应该为返回值会被忽略的回调函数设置返回值类型 `void`。

```typescript
// Bad
function fn(x: () => any) { x(); }

// Good
function fn(x: () => void) { x(); }
```

使用 `void` 相对安全，因为它能防止不小心使用了未经检查的 `x` 的返回值：

```typescript
function fn(x: () => void) {
    var k = x(); // oops! meant to do something else
    k.doSomething(); // error, but would be OK if return type is 'any'
}
```

**不要在回调函数里使用可选参数**，除非这是你想要的, 应该将回调函数定义为无可选参数:

```typescript
// Bad
interface Fetcher { getObject(done: (data: any, elapsedTime?: number) => void): void; }

// Good
interface Fetcher { getObject(done: (data: any, elapsedTime: number) => void): void; }
```

#### 重载与回调函数

不要因回调函数的参数数量不同而编写不同的重载。

```typescript
// Bad
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll( action: (done: DoneFn) => void, timeout?: number ): void;
```

应该只为最大数量参数的情况编写一个重载, 回调函数**总是允许**忽略某个参数的，因此没必要为缺少可选参数的情况编写重载。

```typescript
// Good
declare function beforeAll( action: (done: DoneFn) => void, timeout?: number ): void;
```

### 函数重载

#### 顺序

不要把模糊的重载放在具体的重载前面：

```typescript
// Bad
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any
```

应该将重载排序，把具体的排在模糊的之前：

```typescript
// Good
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string
```

当解析函数调用的时候，TypeScript 会选择匹配到的第一个重载。**当位于前面的重载比后面的更”模糊“，那么后面的会被隐藏且不会被选用。**

#### 使用可选参数

不要因为只有末尾参数不同而编写不同的重载：

```typescript
// Bad
interface Example {
	diff(one: string): number;
	diff(one: string, two: string): number;
	diff(one: string, two: string, three: boolean): number;
}
```

应该尽可能使用可选参数：

```typescript
// Good
interface Example { diff(one: string, two?: string, three?: boolean): number; }
```

注意，这只在返回值类型相同的情况是没问题的。

有以下两个重要原因：

- TypeScript 解析签名兼容性时会查看**是否某个目标签名能够使用原参数调用，且允许额外的参数**。下面的代码仅在签名被正确地使用可选参数定义时才会暴露出一个 bug：

```typescript
function fn(x: (a: string, b: number, c: number) => void) {}
var x: Example;
// 函数重载会使用第一个重载，不会报错，但是这并不符合我们的真实情况
// 使用可选参数会有错误，回调函数参数的类型不匹配
fn(x.diff);
```

- 第二个原因是当使用了 TypeScript “严格检查 null” 的特性时。因为未指定的参数在 JavaScript 里表示为 `undefined`，通常明确地为可选参数传入一个 `undefined` 不会有问题。 这段代码在严格 `null` 模式下可以工作：

```typescript
var x: Example;
// 函数重载会报错，因为 (true ? undefined : "hour") 的类型是 string | undefined，而函数重载只能是 string，或者不填（和 undefined 有区别）。
// 可选参数不会报错
x.diff("something", true ? undefined : "hour");
```

#### 使用联合类型

不要仅因某个特定位置上的参数类型不同而定义重载：

```typescript
// Bad
interface Moment {
	utcOffset(): number;
	utcOffset(b: number): Moment;
	utcOffset(b: string): Moment;
}
```

应该尽可能地使用联合类型：

```typescript
// Good
interface Moment {
	utcOffset(): number;
	utcOffset(b: number | string): Moment;
}
```

注意，我们没有让 `b` 成为可选的，因为签名的返回值类型不同。

这对于那些为该函数传入了值的使用者来说很重要：

```typescript
function fn(x: string): void;
function fn(x: number): void;
function fn(x: number | string) { 
	// 函数重载会报错
	// 使用联合类型正常解析
	return moment().utcOffset(x);
}
```

### 类

类成员声明时除了 `public` 成员，其余成员都应该显式加上作用域修辞符。

```typescript
// Bad
class Foo {
	foo = 'foo'
	bar = 'bar'
	getFoo() { return this.foo }
}

const foo = new Foo()
foo.foo
foo.bar

// Good
class Foo {
	private foo = 'foo'
	bar = 'bar'
	getFoo() {
		return this.foo
	} 
}

const foo = new Foo()
foo.getFoo()
foo.bar
```

### React 组件

- 一个文件对应一个逻辑组件（如解析器，检查器)
- 不要添加新的文件
- .generated.* 后缀的文件是自动生成的，不要手动改它

React 组件建议尽量使用函数组件，拥抱 hooks，少部分复杂场景使用类组件。

函数组件声明：

- 如果该组件有 props，在组件上方写上对应声明类型并导出，类型名为 `组件名 + Props`。
- 组件使用 `React.FC` 定义，`React.FC` 会提供默认的 children 类型，并将 props 的类型作为泛型参数传入。

```typescript
import React from 'react'
// 如果该组件有 props，在组件上方写上对应声明类型并导出，类型名为 组件名 + Props

export interface ExampleProps { a:string }

// 组件使用 React.FC 定义，React.FC 会提供默认的 children 类型，并将 props 的类型作为泛型参数传入
const Example: React.FC<ExampleProps> = () => {}

export default Example
```

类组件声明：

- 如果该组件有 props，在组件上方写上对应声明类型并导出，类型名为 ` 组件名 + Props`。
- 由于 state 不需要向外导出，其命名可直接为 `State`，但是还是需要提前声明。
- 尽量不要在 constructor 内部运行代码，可以省略 constructor 函数的书写，如果使用了 constructor 函数需要加上正确的 props 类型。

```typescript
import { Component } from 'react'
export interface ExampleProps { a: string } 
interface State { value: number }

const initialState: State = { value: 1 }

class Example extends Component<ExampleProps, State> {
	readonly state = initialState
	
	// 如果不使用 constructor 就不要写，否则需要加上正确的 props 类型
	constructor(props: ExampleProps) {
		super(props) this.setState((state) => ({
			...state, value: state.value + 1 
		})) 
	}
}

export default Example
```

### 泛型

不要定义一个从来没使用过其类型参数的泛型类型。

### 类型

- 不要导出类型 / 函数，除非你要在不同的组件中共享它
- 不要在全局命名空间内定义类型 / 值
- 共享的类型应该在 types.ts 里定义
- 在一个文件里，类型定义应该出现在顶部

## 定义文件（.d.ts）书写规范

### 全局类型/变量定义

全局类型/变量统一写在 `global.d.ts` 文件中，在写入时需要判断：

- 如果有引入外部模块，使用 `declare global {}` 形式定义

```typescript
import { StateType } from './state'
declare global {
	export const globalState: StateType
	export const foo: string
	export type AsyncFunction = (...args: any[]) => Promise<any>
}
```

- 如果没有引入外部模块，直接使用 `declare` 定义

```typescript
interface StateType {}
declare const globalState: StateType
declare const foo: string
declare type AsyncFunction = (...args: any[]) => Promise<any>
```

### 为第三方库拓展定义文件

第三方定义文件应该以 `[package].d.ts` 规则命名，文件统一放在项目的类型目录下。

举个例子：

```typescript
// types/references/react-redux.d.ts
// 最好加一句这段话，不然导出可能会被覆盖掉，只有 DefaultRootState 存在
export * from 'react-redux'
import { FooState } from './foo'

// 扩展第三方库
declare module "react-redux" { 
	// 原来的 DefaultRootState 的定义类型为 {}，我们把它变成索引类型
	export interface DefaultRootState {
		foo: FooState [key: string]: any
	}
}
```

## 注释书写规范

在为接口或 sdk 书写注释时使用 `tsdoc` 的形式，ide 可以在使用时识别出 `tsdoc`。

```typescript
/**
 * 两数之和
 */
export function add(a: number, b: number) { 
	return a + b 
}
```

### tsdoc 规范

tsdoc 语法比起 jsdoc 更加严格，同时关注点也不同，jsdoc 更多的关注点在给 js 提供类型注释，而 TS 天生就支持类型，所以 **tsdoc 关注点在于文档和 API 管理**。

一些 jsdoc 中的 tag，在 TS 中使用毫无用处，比如：

- @function : 将一个变量标记为函数
- @enum：将一个对象标记为 enum
- @access：标注对象成员的访问级别（ private、 public、 protected），typescript 本身支持 private/public/readonly 等
- @type：标准变量类型

一些关于 tsdoc 的 tag 看 [tsdoc.org](https://tsdoc.org)
