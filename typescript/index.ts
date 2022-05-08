/**
 * @author heart
 * @description 范型
 * @Date 2022-02-12
 */

class O {
  n: string
}

class Person extends O {
  name: string
}

class Student extends Person {
  age: number
}

// keyof Student 相当于 是 Student的联合类型 'name' | 'n' | 'age'
function test<T extends Person, U extends keyof Student>(num: T, key: U) {
  console.log(num)
}
// 此时是 Person的子类
test({ name: '1', age: 2, n: '1' }, 'name')

// 报错
// test(new O());

test<Person, 'name' | 'n'>(new Person(), 'name')
test<Student, 'name' | 'n' | 'age'>(new Student(), 'age')

// 相当于了 Person的联合类型
const num: keyof Person = 'name'
console.log(num)
class A {
  name: string
}
export {}
