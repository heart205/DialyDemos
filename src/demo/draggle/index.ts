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

import { draggle, draggleOperation } from './deaggle.js'
const container: HTMLDivElement = document.querySelector(
  '.contains'
) as HTMLDivElement
const elementLi: HTMLCollection = document.getElementsByClassName(
  'box'
) as HTMLCollection

for (let i in elementLi) {
  const dom = new draggle()
  if (dom && dom.addEvent) dom.addEvent(elementLi[i])
}
const draggableOptionDom = new draggleOperation()

if (draggableOptionDom && draggableOptionDom.addEvent) {
  draggableOptionDom.addEvent(container)
}
