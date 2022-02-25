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
export {};
