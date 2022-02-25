/**
 * @author heart
 * @description 防抖函数
 * @Date 2022-02-13
 * @description 效果：如果短时间内大量触发同一事件，只会执行一次函数 最后一次调用有效。
 */

function debounce(func: Function, delay: number) {
  var timer: NodeJS.Timeout = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, arguments)
    }, delay)
  }
}


export { }