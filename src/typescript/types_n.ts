// 实现 TS 内置的 Pick<T, K>，但不可以使用它。

// 从类型 T 中选择出属性 K，构造成一个新的类型。
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Todo {
  title: string
  description: string
  completed: boolean
}
// 合并对象
type Merge<otherParam extends object, Param extends object> = {
  [key in keyof otherParam | keyof Param]: key extends keyof otherParam
    ? otherParam[key]
    : key extends keyof Param
    ? Param[key]
    : never
}
// 实现queryParameters的代码
type queryParameters<T extends string> = T extends `${infer key}=${infer value}`
  ? T extends `${infer ks}=${infer kv}&${infer r}`
    ? Merge<{ [k in ks]: kv }, queryParameters<r>>
    : { [k in key]: value }
  : Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type foo = queryParameters<'age=1&obj=2&ddd=333'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type a = Merge<{ age: 'a' }, { number: 'b' }>

// 将类型变成数组
type toArray<T> = [T] extends [number | string] ? T[] : never
// type union = string[] | number[]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type union = toArray<string | number>

export {}
