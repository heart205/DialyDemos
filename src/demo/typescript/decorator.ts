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
/**
 * 装饰器的本质就是一个函数
 * 装饰器不能用在声明文件(.d.ts)中和任何外部上下文中（比如 declare）
 */
@setProps
class Person implements person {
  names: string
}

console.log(new Person().names)

// TOOD: 装饰器工厂
function setProp(age: number) {
  return function (target: Function) {
    target.prototype.age = age //值设置在了prototype中
  }
}

@setProp(16)
class Student implements person {
  names: string
  age: number
}

console.log(new Student().age)

type a = typeof Student // typeof一个类 {prototype,Symblo,apply,arguments,bind,call,caller,length,name,toString}

/**
 * 装饰器，分别把一个类中的部分属性、类本身、方法、参数
 * 装饰器可以修饰一个类本身 属性 或者方法 和 方法里面的参数
 * 装饰器装饰一个方法的时候 将原本的一个方法通过Object.defineProperty装饰了
 */
@classLog
class D implements person {
  @logProperty
  names: string
  @methodLog
  nameMethod(@logParameter message: string) {
    return message
  }
}

function classLog(person: typeof Person) {
  console.log('classLog', person) // 传入的就是被修饰的类
}
function logProperty(target: unknown, protoKey: string) {
  //修饰属性只有这两个参数
  console.log('logProperty', target) // 传入的是 new D().__proto__ 也是D.prototype
  console.log('logProperty', protoKey) // 被修饰的参数名字
}

// 打印方法名
function methodLog(
  target: any,
  protoKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('methodLog', target) //  传入的是 new D().__proto__ 也是D.prototype
  console.log('methodLog', descriptor) //  defineProperty定义出来的四个属性
  console.log('methodLog', protoKey) // nameMethod的名字
  descriptor.writable = false
}
// 打印参数位置
function logParameter(target: any, propertyKey: string, index: number) {
  console.log('logParameter', index) //参数传递的位置
  console.log('logParameter', propertyKey) // 修饰的方法名
  console.log('logParameter', target) // D.prototype
  console.log(target[propertyKey]) // nameMethod方法
}

export {}
