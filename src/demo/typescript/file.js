/**
 * 查找如果是一个文件夹（暂时定为foo） 则去找 foo/index.ts 或者去查找 foo/package.json中的types文件 或者是 foo/package.json 中的main文件
 * 如果是一个文件 则直接去查找该文件
 */
// console.log(jest);
/**
 * 编译之后的文件将会只有一个let a 不会产生import jest等代码
 * 这里的import 仅加载类型信息，而没有运行时的依赖关系（没有被当作变量使用） 编译后导入的jest将会被完全移除
 * 下面说明demo 懒加载：
 */
let a;
function load() {
    const foo = require('./file');
}
/**
 * 对于global.d.ts的解释：
 * global.d.ts 文件，用来将一些接口或者类型放入全局命名空间里，这些定义的接口和类型能在你的所有 TypeScript 代码里使用
 */
/**
 * 如果要引入import()的写法 需要将module 设置为 esnext选项
 */
import('./typescript');
export {};
