/**
 * @author heart
 * @description 类型注解
 * @Date 2022-02-25
 */

import { type } from 'os'

// 内联类型注解 内联注解语法注解任何内容：:{ /*Structure*/ }

let person: {
  // 内联注解
  name: string
  age: number
}

person = {
  name: 'tom',
  age: 1,
}

// 联合类型和交叉类型提供一个语义化的名称时，一个类型别名将会是一个好的选择。
/**
 * 联合类型
 */
type format = number | string
function formatCommandLine<T extends format>(command: T): T {
  // ...操作
  if (typeof command === 'string') {
    return command
  }
  return null
}

/**
 * 交叉类型
 */

function extend<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  const result = <T & U>{}
  for (let id in first) {
    ;(<T>result)[id] = first[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<U>result)[id] = second[id]
    }
  }
  return result
}
/**
 * keyof使用
 * 1. 对于一个对象的类型使用keyof 返回的是对象的属性名的联合类型 如果这个类型有一个 string 或者 number 类型的索引签名，keyof 则会直接返回这些类型
 * 2. 数字字面量的联合类型
 * 3.Symbol
 * 4.对类和接口使用
 */
type Point = { x: number; y: number }
type p = keyof Point //keyof Point

type a = {
  [k in p]: [k, k, k]
}

type point1 = { [num: number]: string }

type p1 = keyof point1 // type p1 = number

type point2 = { [num: string]: string }
type p2 = keyof point2 // type p2 = number | string 由于 对象的属性名会被强制转为一个字符串 p2[0] 和 p2['0'] 一致
type a2 = p2

type point3 = { [num: symbol]: string }
type p3 = keyof point3 // type p3 = symbol
type a3 = p3

const numberObject = {
  [1]: '1',
  [2]: '2',
  [3]: '3',
}

// TODO: 数字的字面量的联合类型
type numberType = typeof numberObject
// typeof NumbericObject 的结果为：
// {
//   1: string;
//   2: string;
//   3: string;
// }

type n1 = keyof numberType //type n1 = 1 | 2 | 3

// Symbol 作为类型的属性名
const sym1 = Symbol()
const sym2 = Symbol()
const sym3 = Symbol()

const symbolToNumberMap = {
  [sym1]: 1,
  [sym2]: 2,
  [sym3]: 3,
}

type KS = keyof typeof symbolToNumberMap // type KS = typeof sym1 | typeof sym2 | typeof sym3

function useKey<T, K extends keyof T>(o: T, k: K) {
  // var name: string   = k
  // Type 'string | number | symbol' is not assignable to type 'string'. // k的值可以是 string | number | symbol
  // 这样可以解决
  var name: string | symbol | number = k
  // 或者使用 K extends Extract<keyof T,string> 确定只使用字符串类型的属性名
}

// TODO:4.对类和接口使用
class perso {
  name: string;
  [1]: number
}

interface pInter extends perso {
  age: number
}

type personType = keyof perso
type ae = personType // 1 | 'name'
// const aeTan: ae = 1
// const aeTan: ae = 'name'

type pInters = keyof pInter // type pInters = 1 | 'name' | 'age'
// const aeTan: pInters = 1
// const aeTan: pInters = 'name'
// const aeTan: pInters = 'age'

interface onePerson {
  name: string
  age: number
}

type PromiseType<P> = P extends Promise<infer value>
  ? value
  : P extends onePerson
  ? onePerson
  : never

export {}
