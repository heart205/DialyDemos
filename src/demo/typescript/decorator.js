/**
 * @author heart
 * @description 装饰器  装饰器模式
 * @Date 2022-02-25
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function setProps(target) {
    target.prototype.names = 'default';
}
/**
 * 装饰器的本质就是一个函数
 * 装饰器不能用在声明文件(.d.ts)中和任何外部上下文中（比如 declare）
 */
let Person = class Person {
};
Person = __decorate([
    setProps
], Person);
console.log(new Person().names);
// TOOD: 装饰器工厂
function setProp(age) {
    return function (target) {
        target.prototype.age = age; //值设置在了prototype中
    };
}
let Student = class Student {
};
Student = __decorate([
    setProp(16)
], Student);
console.log(new Student().age);
/**
 * 装饰器，分别把一个类中的部分属性、类本身、方法、参数
 * 装饰器可以修饰一个类本身 属性 或者方法 和 方法里面的参数
 * 装饰器装饰一个方法的时候 将原本的一个方法通过Object.defineProperty装饰了
 */
let D = class D {
    nameMethod(message) {
        console.log('class decorator');
        return message;
    }
};
__decorate([
    logProperty,
    __metadata("design:type", String)
], D.prototype, "names", void 0);
__decorate([
    methodLog,
    __param(0, logParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], D.prototype, "nameMethod", null);
D = __decorate([
    classLog
], D);
function classLog(person) {
    console.log('classLog', person); // 传入的就是被修饰的类
}
function logProperty(target, protoKey) {
    //修饰属性只有这两个参数
    console.log('logProperty', target); // 传入的是 new D().__proto__ 也是D.prototype
    console.log('logProperty', protoKey); // 被修饰的参数名字
}
// 打印方法名
function methodLog(target, protoKey, descriptor) {
    console.log('methodLog', target); //  传入的是 new D().__proto__ 也是D.prototype
    console.log('methodLog', descriptor); //  defineProperty定义出来的四个属性
    console.log('methodLog', protoKey); // nameMethod的名字
    descriptor.writable = false;
}
// 打印参数位置
function logParameter(target, propertyKey, index) {
    console.log('logParameter', index); //参数传递的位置
    console.log('logParameter', propertyKey); // 修饰的方法名
    console.log('logParameter', target); // D.prototype
    console.log(target[propertyKey]); // nameMethod方法
}
/**
 * 装饰器组合
 * 对于同一个目标可以引用多个装饰器
 * 装饰器工厂从上到下依次执行，但是只是用于返回函数但不调用函数；
 * 装饰器函数从下到上依次执行，也就是执行工厂函数返回的函数。
 * 装饰器工厂会优先执行 然后在原有的位置上返回一个函数 之后装饰器函数依次从下往上执行
 * TODO: 装饰器的执行顺序：属性>方法参数>方法>类
 */
/**
 * 类装饰器
 * 传入的参数是当前所修饰类的构造函数  A === A.prototype.constructor a的原型对象的构造函数又指向了这个类
 * 这里的target 就是 A的constructor 因此类装饰器可以操作类的原型
 * 类装饰器如果有返回值且返回值是一个函数 则这个函数类似于会重写被所修饰的类的构造器（constructor）
 */
function setName(target) {
    console.log(target);
    console.log('类装饰器');
}
function setAge(target) {
    console.log('setAge');
}
function setAclass(str) {
    console.log('setAclass');
    return function (target) {
        console.log(str);
    };
}
/**
 *
 * @param target 装饰静态成员时是类的构造函数
 * @param key 成员的名字
 */
function property(target, key) {
    console.log('属性装饰器');
}
/**
 * 方法装饰器
 * @param target 装饰静态成员时是类的构造函数
 * @param protoKey 成员的名字
 * @param descriptor 成员的属性描述符 包含了是哪个属性 configurable、writable和enumerable 描述这个属性的可配置性 可写性 和枚举性
 * writable 为false  属性不可以被编辑
 * 方法装饰器返回一个值，那么会用这个值作为方法的属性描述符对象
 * 访问器装饰器也是和方法装饰器一样操作 不允许同时装饰一个成员的 get 和 set 访问器
 */
function methodsLog(target, protoKey, descriptor) {
    console.log('方法装饰器');
}
/**
 *
 * @param target 当前对象的原型(obj.__proto__)
 * @param propertyKey 参数的名
 * @param index 参数数组中的位置 从0开始计时
 * 参数装饰器的返回值会被忽略
 * 参数装饰器可以提供信息，给比如给类原型添加了一个新的属性，属性中包含一系列信息，这些信息就被成为「元数据」
 * 然后就可以使用另外一个装饰器来读取「元数据」（因为最后才执行类装饰器）
 */
function paramLog(target, propertyKey, index) {
    console.log('方法参数装饰器');
}
let A = class A {
    as(st) { }
};
__decorate([
    property,
    __metadata("design:type", String)
], A.prototype, "names", void 0);
__decorate([
    methodsLog,
    __param(0, paramLog),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], A.prototype, "as", null);
A = __decorate([
    setName,
    setAge,
    setAclass('12')
], A);
function classDecorator(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.newPropery = '123';
        }
    };
}
function classDecorators(target) {
    return function () {
        console.log('123');
    };
}
let Geeter = class Geeter {
    constructor(hello) {
        this.hello = hello;
        this.property = 'property';
    }
};
Geeter = __decorate([
    classDecorators,
    __metadata("design:paramtypes", [String])
], Geeter);
console.log(new Geeter('names'));
export {};
