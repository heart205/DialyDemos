/**
 * @author heart
 * @description
 * @Date 2022-02-25
 * 待设计：吸附的过程中添加吸附的参考线
 * 以及 设计一个draggleOperation的一个dom元素 增加样式占位等
 */

type eventType = keyof typeof draggleEvent
type opeationType = keyof typeof draggableEnum
type p = keyof HTMLElementTagNameMap
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
abstract class deaggable {
  readonly signParam: string
  addEvent?<T>(element: T): void
  static activate_className = 'draggable_activate'
  replacrClassName(str: string, e: Element) {
    const reg = new RegExp(deaggable.activate_className, 'gm')
    e.className = str.replace(reg, '')
  }
  testClassName(str: string) {
    const reg = new RegExp(deaggable.activate_className, 'gm')
    return reg.test(str)
  }
  addClassName(e: Element) {
    const tag = e.className
    if (!this.testClassName(tag)) {
      e.className = tag + ' ' + deaggable.activate_className
    }
  }
}

function addEvent(target: Function) {
  target.prototype.addEvent = function <T>(element: T): void {
    if (this.signParam === 'draggle') {
      for (let i in draggleEvent) {
        if (element instanceof Element) {
          element.addEventListener(
            draggleEvent[i as eventType],
            this[i as eventType],
            false
          )
        }
      }
    } else if (this.signParam === 'draggleOperation') {
      for (let i in draggableEnum) {
        if (element instanceof Element) {
          this.element = element // 存放可以操作拖拽的DOM
          element.addEventListener(
            draggableEnum[i as opeationType],
            this[i as opeationType],
            false
          )
        }
      }
    }
  }
}

abstract class AbstractDraggable extends deaggable {
  abstract onDrag(event: DragEvent): boolean | void // 文本的选择被拖动 会触发的事件
  abstract onDragEnd(event: DragEvent): boolean | void //拖动操作结束
  abstract onDragstart(event: DragEvent): boolean | void
}

abstract class AbstractDraggableOperation extends deaggable {
  abstract onDragLeave(event: DragEvent): boolean | void
  abstract onDragover(event: DragEvent): boolean | void
  abstract onDragEnter(event: DragEvent): boolean | void
  abstract onDrop(event: DragEvent): boolean | void
}

@addEvent
export class draggle<T> extends AbstractDraggable {
  static element: Element // 记录当前被拖拽的DOM
  readonly signParam = 'draggle'
  onDragstart(event: DragEvent): boolean | void {
    // 拖拽开始阻止默认事件将不能被拖拽
    // console.log(event)
    if (!draggle.element) {
      draggle.element = event.target as HTMLDivElement
    }
    // event.preventDefault()
    // console.log('拖拽开始')
    return false
  }
  onDrag(event: DragEvent): boolean | void {
    // console.log('正在拖拽')
    return true
  }
  onDragEnd(event: DragEvent): boolean | void {
    // 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)
    console.log('拖拽结束')
    const str: string = draggle.element.className
    this.replacrClassName(str, draggle.element)
    draggle.element = null
    return true
  }
  constructor() {
    super()
    this.onDrag = this.onDrag.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onDragstart = this.onDragstart.bind(this)
  }
}

@addEvent
export class draggleOperation<T> extends AbstractDraggableOperation {
  addElement: Element // 保存当前正在拖拽需要被添加的元素 如果离开删除元素 如果
  readonly signParam = 'draggleOperation'
  element: Element // 当前监听拖放的DOM
  onDragEnter(event: DragEvent): boolean | void {
    console.log('拖拽是否进入')
    // 当拖拽元素或选中的文本到一个可释放目标时触发(进入监听了拖拽事件的元素)
    this.addElement = factoryElement('li', {}, draggle.element)
    return true
  }
  onDragLeave(event: DragEvent): boolean | void {
    // 鼠标离开了拖拽的元素 则会触发元素
    if (this.addElement !== null) {
      this.addElement = null
    }
    console.log('拖拽离开')
  }
  onDragover(event: DragEvent): boolean | void {
    // 有效的目标指的是监听了这个事件的元素是否有拖拽的元素在上面 有的话则触发
    event.preventDefault()
    if (draggle.element) {
      // console.log(draggle.element.className)
      if (!this.testClassName(draggle.element.className)) {
        this.addClassName(draggle.element)
      }
      // console.log(draggle.element)
    }

    return true
    // console.log('拖拽是否放到有效的目标上')
  }
  onDrop(event: DragEvent): boolean | void {
    // 当元素或选中的文本在可释放目标上被释放时触发
    // 将元素添加到dom中
    console.log('被释放的时候出发')
    console.log(this.addElement)
    if (this.addElement) {
      this.element.appendChild(this.addElement)
      this.addElement = null
    }
    return false
  }
  constructor() {
    super()
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onDragover = this.onDragover.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
  }
}

export function factoryElement(
  str: p,
  options: ElementCreationOptions,
  e?: Element
) {
  if (document) {
    const el = document.createElement(str, options)
    el.className = 'draggable_moving'
    if (e) {
      const context = document.createTextNode(e.innerHTML)
      el.appendChild(context)
    }
    return el
  }
  return null
}
