/**
 * @author heart
 * @description 测试symbol
 * @Date 2022-04-21
 */

const fooSymbol: any = Symbol.for("foo");

const barSymbol: any = Symbol.for("foo");

// true
console.log(fooSymbol === barSymbol);

const localSymbol: any = Symbol("foo");
console.log(localSymbol);

const globalSymbol: any = Symbol.for("foo");
console.log(globalSymbol);

// false
console.log(localSymbol === globalSymbol);

/**
 * @description keyFor 获取符号的字符串键
 */

// foo
console.log(Symbol.keyFor(fooSymbol));

const undefinedSymbol = Symbol.for();
console.log(undefinedSymbol);

// undefined
console.log(Symbol.keyFor(undefinedSymbol));

/**
 * @description hasInstance
 * @param instanceof的时候会触发类上的 [Symbol.hasInstance]
 */

class Foo {
  static [Symbol.hasInstance](foo: any) {
    return false;
  }
}

console.log(Foo.__proto__);

const f = new Foo();

class Foo1 extends Foo {}

console.log(Foo1.__proto__ === Foo); // true

// true
console.log(Foo1[Symbol.hasInstance](f));

/**
 * Symbol.match
 * 由String.prototype.match方法使用
 */

class match {
  static [Symbol.match](target) {
    return [target];
  }
}
// 正则表达式的原型上面有[Stmbol.match]方法 因此是match()的有效参数
console.log("123".match(match));

/**
 * Symbol.isConcatSpreadable 是否能用concat来平铺数组 false会将值追加到末尾
 * 数组默认打平后在追加到末尾 类数组追加到末尾
 */

const fooArr = ["arr"];
console.log(fooArr);

const bar = ["foo"];
bar[Symbol.isConcatSpreadable] = false;

console.log(bar[Symbol.isConcatSpreadable]);

console.log(fooArr.concat(bar));

const set = new Set();

set.add("1");
// 不是类数组对象的对象在 Symbol.isConcatSpreadable 被设置为 true 的情况下将被忽略
set[Symbol.isConcatSpreadable] = true;
console.log(fooArr.concat(set));

/**
 * Symbol.iterator
 * 返回的得是一个Generator的对象 不然 for of 会报错
 */

class iteratorClass {
  *[Symbol.iterator]() {}
}
const i = new iteratorClass();

console.log(i[Symbol.iterator]());

export {};
