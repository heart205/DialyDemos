/**
 * @author heart
 * @description 
 * @Date 2022-02-25
 * 待设计：吸附的过程中添加吸附的参考线
 * 以及 设计一个draggleOperation的一个dom元素 增加样式占位等
 */


enum draggleEvent {
  onDrag = 'drag',
  onDragEnd = 'dragend',
  onDragstart = 'dragstart',
}

enum draggableEnum {
  onDragEnter = 'dragenter',
  onDragLeave = 'dragleave',
  onDragover = 'dragover',
  onDrop = 'drop',
}
type eventType = keyof typeof draggleEvent
type opeationType = keyof typeof draggableEnum

abstract class AbstractDraggable {
  abstract onDrag(event: DragEvent): boolean | void // 文本的选择被拖动 会触发的事件
  abstract onDragEnd(event: DragEvent): boolean | void //拖动操作结束
  abstract onDragstart(event: DragEvent): boolean | void
}

abstract class AbstractDraggableOperation {
  abstract onDragLeave(event: DragEvent): boolean | void
  abstract onDragover(event: DragEvent): boolean | void
  abstract onDragEnter(event: DragEvent): boolean | void
  abstract onDrop(event: DragEvent): boolean | void
}

export class draggle<T> extends AbstractDraggable {
  static element: HTMLDivElement
  onDragstart(event: DragEvent): boolean | void {
    // 拖拽开始阻止默认事件将不能被拖拽
    console.log(event)
    draggle.element = event.target as HTMLDivElement
    // event.preventDefault()
    console.log('拖拽开始')
    return false
  }
  addEvent<T>(element: T): void {
    for (let i in draggleEvent) {
      if (element instanceof HTMLDivElement) {
        element.addEventListener(
          draggleEvent[i as eventType],
          this[i as eventType],
          false
        )
      }
    }
  }
  constructor(element: T) {
    super()
    this.addEvent<T>(element)
  }
  onDrag(event: DragEvent): boolean | void {
    // console.log('正在拖拽')
    return true
  }
  onDragEnd(event: DragEvent): boolean | void {
    // 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)
    console.log('拖拽结束')
    draggle.element = null
    return true
  }
}

export class draggleOperation<T> extends AbstractDraggableOperation {
  static activate_className = 'draggable\_activate'
  onDragEnter(event: DragEvent): boolean | void {
    // 当拖拽元素或选中的文本到一个可释放目标时触发(进入监听了拖拽事件的元素)
    console.log('拖拽是否进入')
    return true
  }
  onDragLeave(event: DragEvent): boolean | void {
    // 鼠标离开了拖拽的元素 则会触发元素
    console.log('拖拽离开')
  }
  onDragover(event: DragEvent): boolean | void {
    // 有效的目标指的是监听了这个事件的元素是否有拖拽的元素在上面 有的话则触发
    event.preventDefault()
    if (draggle.element) {
      console.log(draggle.element.className)
      const reg = new RegExp(draggleOperation.activate_className, 'gm')
      if (!reg.test(draggle.element.className)) {
        const tag = draggle.element.className
        draggle.element.className =
          tag + ' ' + draggleOperation.activate_className
      }
      console.log(draggle.element)

      //
    }

    return true
    // console.log('拖拽是否放到有效的目标上')
  }
  onDrop(event: DragEvent): boolean | void {
    // 当元素或选中的文本在可释放目标上被释放时触发
    console.log('可释放')
    return false
  }
  addEvent<T>(element: T): void {
    for (let i in draggableEnum) {
      if (element instanceof HTMLDivElement) {
        element.addEventListener(
          draggableEnum[i as opeationType],
          this[i as opeationType],
          false
        )
      }
    }
  }
  constructor(elemnet: T) {
    super()
    this.addEvent<T>(elemnet)
  }
}
