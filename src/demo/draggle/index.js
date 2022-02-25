/**
 * @author heart
 * @description 拖拽和拖放的使用
 * @Date 2022-02-25
 */
/**
 * 当从操作系统向浏览器中拖拽文件时，不会触发 dragstart 和dragend 事件。
 * 分为拖放和拖拽事件
 * 拖拽事件 drag dragStart dragEnd
 * 拖放事件(用于可以执行放置的区域) dragEnter dragLeave drop dragover
 */
import { draggle, draggleOperation } from './deaggle.js';
const element = document.querySelector('.box');
const container = document.querySelector('.contains');
new draggle(element);
new draggleOperation(container);
