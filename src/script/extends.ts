/**
 * @author heart
 * @description 继承
 * @Date 2022-04-22
 * @description: 静态属性和方法是可被继承的。
 * Function.__proto__ === Function.prototype // true
 * Function的显式原型链指向的和隐式原型链都指向的是一个 因此继承的类属性可以使用Function原型链上的属性
 *
 * 如果是继承的关系 则 子类的__proto__ 指向的是父类
 * 如果是直接创建的类 则 类的__proto__ 指向的是 Function.prototype
 */

// TODO: 从原型继承的方法和 从prototype的方法那个优先级高
// 继承的原型链的优先级更高 A的优先级更高

class A {
  static toString() {
    return 'A的toString'
  }
}

class B extends A {
  static toString() {
    return 'B的toString()'
  }
}

// A.__proto__ => Function.prototype
A.__proto__.toString = function () {
  return 'Object的toString()'
}

// A.__proto__.__proto__ = Object.prototype
A.__proto__.__proto__.toString = function () {
  return 'Function的toString()'
}

console.log(Function.__proto__.toString())

console.log(Function.toString())

console.log(B.toString())

export {}
