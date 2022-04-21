/**
 * @author heart
 * @description 测试symbol
 * @Date 2022-04-21
 */

const fooSymbol: any = Symbol.for('foo')

const barSymbol: any = Symbol.for('foo')

// true
console.log(fooSymbol === barSymbol)

const localSymbol: any = Symbol('foo')
console.log(localSymbol)

const globalSymbol: any = Symbol.for('foo')
console.log(globalSymbol)

// false
console.log(localSymbol === globalSymbol)

/**
 * @description keyFor 获取符号的字符串键
 */

// foo
console.log(Symbol.keyFor(fooSymbol))

const undefinedSymbol = Symbol.for()
console.log(undefinedSymbol)

// undefined
console.log(Symbol.keyFor(undefinedSymbol))

class Foo {
  static [Symbol.hasInstance](foo: any) {
    return false
  }
}
const f = new Foo()

// true
console.log(Foo[Symbol.hasInstance](f))

export {}
