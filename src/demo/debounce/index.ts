/**
 * @author heart
 * @description 防抖函数
 * @Date 2022-02-13
 * @description 效果：如果短时间内大量触发同一事件，只会执行一次函数 最后一次调用有效。
 */
type timerType<T> = T extends (...args: any[]) => infer R ? R : null
function debounce(func: (...args: any) => void, delay: number) {
  let timer: timerType<typeof setTimeout | null> = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(this, arguments)
    }, delay)
  }
}

const btn = document.getElementById('btn')

btn?.addEventListener(
  'click',
  debounce(() => {
    console.log('点击生效')
  }, 500),
  false
)

console.log((process as any).template)

export {}
