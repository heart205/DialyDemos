/**
 * @author xchen
 * @description 节流函数
 * @Date 2022-02-13
 * @description 事件被触发后，指定时间内不允许再次触发
 */


/**
 * 时间戳执行防抖函数
 * @param func 执行函数
 * @param delay 不允许出发的时间
 */
function throttleDemo1(func: Function, delay: number) {
  var timer: number = 0;
  return function () {
    var now: number = new Date().getTime();
    // 在delay时间内不会出发第二次
    if (now >= timer + delay) {
      console.log(arguments);
      func.call(this, arguments)
      timer = now;
    } else {
      console.log("delay not end");
    }
  }
}

window.addEventListener('resize',throttleDemo1(() => {
  console.log("loading");
}, 500))

export { }