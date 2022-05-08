/**
 * @author heart
 * @description
 * @Date 2022-04-21
 */

const fooSymbol = Symbol('foo')

const obj = {
  [fooSymbol]: '',
  foo: 'bar',
}

//
console.log(Object.getOwnPropertyNames(obj))

console.log(Object.getOwnPropertySymbols(obj))

// 返回同时包含常规和符号属性描述符的对象
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))

// 会返回两种类型(getOwnPropertyNames and getOwnPropertySymbols)的键
console.log(Reflect.ownKeys(obj))

console.log(fooSymbol.toString().match(/foo/))

export {}
