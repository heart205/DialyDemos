/**
 * @author heart
 * @description 类型体操
 * @Date 2022-02-22
 */
import { type Timer, type Picker } from '../../types/typescript'
const num: Timer<NodeJS.Timer> = setTimeout(() => {
  console.log('a')
})

export interface person {
  name: string
  age: number
}

//非空断言操作符（后缀 !）(Non-null Assertion Operator)

function live(x?: string | null) {
  // 可以在不做任何检查的情况下，从类型中移除 null 和 undefined，这就是在任意表达式后面写上 !
  return x!.split(',')
}

// 限制为某一个字符串的类型

interface Parse {
  warp: string
}
type str<t extends string> = t extends `${infer key}` ? { [K in `${key}_${number}`]: HTMLElement } : never

type nums<T extends number> = Parse & str<'quque'>

type ParseQueryString<T extends string> = T extends `${infer key}=${infer value}&${infer r}`
  ? {
      [K in key]: value
    } & ParseQueryString<r>
  : T extends `${infer key}=${infer value}`
  ? {
      [K in key]: value
    }
  : {}
// TODO: 方法在 typescript中的types_n.ts 中
type param = ParseQueryString<'name=1&age=2'>

const t: param = {
  name: '1',
  age: '2',
}
