/**
 * @author heart
 * @description 类型体操
 * @Date 2022-02-22
 */

import {Timer,Picker} from '../../types/typescript'
const num: Timer<NodeJS.Timer> = setTimeout(() => {
  console.log('a')
})


export interface person {
  name: string
  age: number
}



