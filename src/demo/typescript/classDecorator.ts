/**
 * @author heart
 * @description 类装饰器
 * @Date 2022-04-14
 */

// 类装饰器可以对类的原型和构造函数进行修改，类装饰器应用于类构造函数，会在类声明之前被执行，可以用来监视，修改或替换类定义。
function classDecorator(target: new () => object) {
  console.log(target);
  // 对原型进行修改：
  // target.prototype.names = 'default'
  // 直接对构造函数进行修改
  return class extends target {
    names = 'default'
  }
}

@classDecorator
class Person {
  names: string = ''
}


console.log(new Person());
