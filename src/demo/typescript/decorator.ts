/**
 * @author heart
 * @description 装饰器  装饰器模式
 * @Date 2022-02-25
 */

// 装饰器(decorator)的主要作用是给一个已有的方法或类扩展一些新的行为，而不是去直接修改它本身。
// 要使用装饰器，需要在 tsconfig.json 的编译配置中开启experimentalDecorators，将它设为 true

interface person {
  names: string
}

function setProps(target: Function) {
  target.prototype.names = 'default'
}

@setProps
class Person implements person {
  names: string
}

console.log(new Person().names)
