/**
 * @author xchen
 * @description 节流函数
 * @Date 2022-02-13
 * @description 事件被触发后，在延迟时间内 仅第一次有效
 */
/**
 * 时间戳执行防抖函数
 * @param func 执行函数
 * @param delay 延迟时间
 */
function throttleDemo1(func, delay) {
    var timer = 0;
    return function () {
        var now = new Date().getTime();
        // 在delay时间内不会出发第二次
        if (now >= timer + delay) {
            console.log(arguments);
            func.call(this, arguments);
            timer = now;
        }
        else {
            console.log("delay not end");
        }
    };
}
/**
 * 定时器版本
 * @param func 执行函数
 * @param delay 延迟时间
 */
function throttleDemo2(func, delay) {
    var timer = null;
    return function () {
        if (!timer) {
            func.call(this, arguments);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        }
        else {
            console.log("delay not end");
        }
    };
}
window.addEventListener('resize', throttleDemo2((event) => {
    console.log("loading", event);
}, 500));
export {};
