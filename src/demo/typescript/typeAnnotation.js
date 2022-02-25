/**
 * @author heart
 * @description 类型注解
 * @Date 2022-02-25
 */
// 内联类型注解 内联注解语法注解任何内容：:{ /*Structure*/ }
let person;
person = {
    name: 'tom',
    age: 1,
};
function formatCommandLine(command) {
    // ...操作
    if (typeof command === 'string') {
        return command;
    }
    return null;
}
/**
 * 交叉类型
 */
function extend(first, second) {
    const result = {};
    for (let id in first) {
        ;
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            ;
            result[id] = second[id];
        }
    }
    return result;
}
const numberObject = {
    [1]: '1',
    [2]: '2',
    [3]: '3',
};
// Symbol 作为类型的属性名
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol();
const symbolToNumberMap = {
    [sym1]: 1,
    [sym2]: 2,
    [sym3]: 3,
};
function useKey(o, k) {
    // var name: string   = k
    // Type 'string | number | symbol' is not assignable to type 'string'. // k的值可以是 string | number | symbol
    // 这样可以解决
    var name = k;
    // 或者使用 K extends Extract<keyof T,string> 确定只使用字符串类型的属性名
}
// TODO:4.对类和接口使用
class perso {
}
export {};
