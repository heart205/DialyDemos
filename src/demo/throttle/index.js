"use strict";
export const __esModule = true;
/**
 * 时间戳执行防抖函数
 * @param func 执行函数
 * @param delay 不允许出发的时间
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
window.addEventListener('resize', throttleDemo1(function () {
    console.log("loading");
}, 500));
