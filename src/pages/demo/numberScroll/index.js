/**
 * @author heart
 * @description
 * @Date 2022-03-15
 */
// TODO: 考虑小数
var box = document.querySelector('div.box')
var timer = null
/**
 * @param val 初始值
 * @param endVal 结束值
 * @param e
 */
function changeNumber(endVal, e, timer, decimals) {
  var val = Number.parseFloat(e.innerHTML) || 0
  var dialyTime = 3
  if (e instanceof HTMLDivElement) {
    e.innerHTML = val + ''
  }
  if (!decimals) {
    var reg = /\.(\d.*)/
    var match = (endVal + '').match(reg)
    if (match) {
      decimals = match[1].length
    }
  }
  if (!timer) {
    // 10s 为 setInterval的数字
    timer = Math.cbrt(endVal - val) * dialyTime
  }
  // 计算差异 并且以多少s的时间完成这个差异
  var differenceValue = endVal - val
  var diffSecond = differenceValue / timer
  // 这里为了防止精度丢失
  diffSecond = Number.parseFloat(diffSecond + '')
  interValNumberScroll(val, endVal, diffSecond, e, decimals)
}
/**
 * @param val 开始值
 * @param endVal 结束值
 * @param diffSecond 差值
 * @param box element 元素
 */
function interValNumberScroll(val, endVal, diffSecond, box, decimals) {
  timer = setInterval(function () {
    if (val >= endVal) {
      if (decimals) {
        box.innerHTML = endVal.toFixed(decimals)
      } else box.innerHTML = endVal + ''
      if (timer) clearInterval(timer)
    } else {
      if (decimals) {
        box.innerHTML = (val + diffSecond).toFixed(decimals)
      } else {
        box.innerHTML = val + diffSecond + ''
      }
      val += diffSecond
    }
  }, 10)
}
/**
 * 初始化值
 * @param val
 * @param box
 */
function initValue(val, box) {
  if (box instanceof HTMLDivElement) box.innerHTML = val + ''
}
if (box) {
  initValue(0, box)
  changeNumber(20000.123, box)
}
