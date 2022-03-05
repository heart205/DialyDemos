/**
 * @author heart
 * @description 类型体操
 * @Date 2022-02-22
 */

import { Timer, Picker } from '../../types/typescript'
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