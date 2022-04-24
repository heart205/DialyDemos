/**
 * @author heart
 * @description 节流函数
 * @Date 2022-02-13
 * @description 事件被触发后，在延迟时间内 仅第一次有效
 */

/**
 * 时间戳执行防抖函数
 * @param func 执行函数
 * @param delay 延迟时间
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function throttleDemo1(func: (...args: any) => void, delay: number) {
  let timer = 0
  return function () {
    const now: number = new Date().getTime()
    // 在delay时间内不会出发第二次
    const arg = [...arguments]
    if (now >= timer + delay) {
      console.log(arguments)
      func.apply(this, arg)
      timer = now
    } else {
      console.log('delay not end')
    }
  }
}

/**
 * 定时器版本
 * @param func 执行函数
 * @param delay 延迟时间
 */
type timOut<T> = T extends (...args: any[]) => infer r ? r : null
function throttleDemo2(func: (...args: any) => void, delay: number) {
  let timer: timOut<typeof setTimeout | null> = null
  return function () {
    const arg = [...arguments]
    if (!timer) {
      func.apply(this, arg)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    } else {
      console.log('delay not end')
    }
  }
}

window.addEventListener(
  'resize',
  throttleDemo2((event) => {
    console.log(event)
    console.log('delay is end')
  }, 3000),
  false
)

export {}
