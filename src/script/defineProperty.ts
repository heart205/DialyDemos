/**
 * @author heart
 * @description defineProperty
 * @Date 2022-04-21
 */

/**
 * defineProperty
 * 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
 * 数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。
 * 存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。
 *
 * configurable 特性表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。
 */

const obj = {
  localSymbol: 'localSymbol',
}

const object = {
  foo: 'bar',
}

Object.defineProperty(obj, 'key', {
  value: 'globalSymbol',
  writable: false, // 只读
  enumerable: true, // 可枚举
  configurable: true, // 可配置
})

// obj.key = 1
// console.log(obj.key)

// 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
const descriptor = Object.create(null)

descriptor.value = 'test'

Object.defineProperty(object, 'key', descriptor)
// Object.defineProperty(object, 'key', {
//   value: 'test',
//   writable: false,
//   enumerable: false,
//   configurable: false,
// })

export {}
