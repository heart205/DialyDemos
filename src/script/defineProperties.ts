/**
 * @author heart
 * @description
 * @Date 2022-04-21
 */

// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象

const obj = {}

Object.defineProperties(obj, {
  prop: {
    value: 'value',
    writable: true,
    enumerable: true,
  },
  detail: {
    value: 'detail',
    writable: true,
    enumerable: true,
  },
})

console.log(obj)

console.log(Object.getOwnPropertyNames(obj))
