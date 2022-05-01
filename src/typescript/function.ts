/**
 * @author heart
 * @description function 匿名函数写法
 * @Date 2022-05-01
 */
interface func {
  (): void
  timer?: number
}

const s: func = () => {
  console.log(s.timer)
}

console.log(s())
