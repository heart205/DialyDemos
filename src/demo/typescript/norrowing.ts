/**
 * @author heart
 * @description 类型收窄（类型保护）
 * @Date 2022-03-01
 */

// 1. typeof类型保护
function pritAll(param: string | string[] | null) {
  // console.log(param.split(',')); // number 属性上不存在split
  if (typeof param === 'object' && param) {
    for (const s of param) {
      // object is possibly null
      console.log(s)
    }
  } else if (typeof param === 'string') {
    console.log(param)
  } else {
    console.log(null === param)
  }
}

// 不能用in去迭代null in操作服也是一个迭代的过程
// Cannot use 'in' operator to search for 'length' in null
// console.log('length' in null);

// 2. instanceof 类型收窄
function logValue(param: string | string[]) {
  if (param instanceof Array) {
    console.log('string[]')
  } else console.log(param)
}

// 赋值收窄类型
// 如果是const 则 x的类型值是 10: 'radom'
let x = Math.random() < 0.5 ? 10 : 'radom'

type xType = typeof x // string | number

x = 12

console.log(x) // let x: number

x = '12'

console.log(x) // let x: string

// 控制流分析（Control flow analysis） 在if while 中也能对类型进行保护
function fn(foo: string | number) {
  // 有return 的原因 在if 后面的foo就是number类型
  if (typeof foo === 'string') {
    return foo
  }
  console.log(foo.toFixed(2))
}

// 类型判断式(type predicates)
// type predicates 也被称为为类型谓词。（所谓 predicate 就是一个返回 boolean 值的函数）
// 一个类型判断式采用 parameterName is Type的形式，但 parameterName 必须是当前函数的参数名。
function isFish(foo: string | number, key: number): foo is string {
  return typeof foo === 'string'
}

// filter中使用类型谓词
const arr = [1, 3, '2', '123', '123']
arr.filter((val): val is string => {
  if (typeof val === 'number') {
    return false
  }
  return true
})

// never 穷尽类型
// 当进行收窄的时候，如果你把所有可能的类型都穷尽了，TypeScript 会使用一个 never 类型来表示一个不可能存在的状态
// never 类型可以赋值给任何类型，然而，没有类型可以赋值给 never （除了 never 自身）。这就意味着你可以在 switch 语句中使用 never 来做一个穷尽检查。

type n<T> = ReturnType<
  T extends (foo: string) => string | number ? (foo: string) => number : never
>
type fc = (foo: string) => void
type sfc = n<fc>
let a: sfc // never
// 构造函数的签名
 // {new (...args: any[]): infer S } //这是一种构造签名
type fn<T> = T extends { new (...args: any[]): infer S } ? S : never

type func = {
  new (...args: any[]): number
}
type a = fn<func>

const map = new Map();

export {}
