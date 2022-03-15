/**
 * @author heart
 * @description
 * @Date 2022-03-15
 */
// TODO: 考虑小数
const box = document.querySelector('div.box')
type timerType<T> = T extends (...args: any[]) => infer R ? R : null
let timer: timerType<typeof setInterval | null> = null

/**
 * @param val 初始值
 * @param endVal 结束值
 * @param e
 */
function changeNumber(endVal: number, e: Element, timer?: number) {
  const val = Number.parseFloat(e.innerHTML) || 0
  const dialyTime = 3;
  if (e instanceof HTMLDivElement) {
    e.innerHTML = val + ''
  }
  if (!timer) {
    // 10s 为 setInterval的数字
    timer = Math.cbrt(endVal - val) * dialyTime
  }
  // 计算差异 并且以多少s的时间完成这个差异
  const differenceValue = endVal - val
  let diffSecond: number = differenceValue / timer
  // 这里为了防止精度丢失
  diffSecond = Number.parseInt(diffSecond + '')
  interValNumberScroll(val, endVal, diffSecond, e)
}
/**
 * @param val 开始值
 * @param endVal 结束值
 * @param diffSecond 差值
 * @param box element 元素
 */
function interValNumberScroll<T extends Element>(
  val: number,
  endVal: number,
  diffSecond: number,
  box: T
) {
  timer = setInterval(() => {
    if (val >= endVal) {
      box.innerHTML = endVal + ''
      if (timer) clearInterval(timer)
    } else {
      box.innerHTML = val + diffSecond + ''
      val += diffSecond
    }
  }, 10)
}
/**
 * 初始化值
 * @param val
 * @param box
 */
function initValue(val: number, box: Element) {
  if (box instanceof HTMLDivElement) box.innerHTML = val + ''
}

if (box) {
  initValue(0, box)
  changeNumber(20000, box)
}
