/**
 * @author heart
 * @description
 * @Date 2022-02-25
 * 待设计：吸附的过程中添加吸附的参考线
 * 以及 设计一个draggleOperation的一个dom元素 增加样式占位等
 */
var draggleEvent;
(function (draggleEvent) {
    draggleEvent["onDrag"] = "drag";
    draggleEvent["onDragEnd"] = "dragend";
    draggleEvent["onDragstart"] = "dragstart";
})(draggleEvent || (draggleEvent = {}));
var draggableEnum;
(function (draggableEnum) {
    draggableEnum["onDragEnter"] = "dragenter";
    draggableEnum["onDragLeave"] = "dragleave";
    draggableEnum["onDragover"] = "dragover";
    draggableEnum["onDrop"] = "drop";
})(draggableEnum || (draggableEnum = {}));
class AbstractDraggable {
}
class AbstractDraggableOperation {
}
export class draggle extends AbstractDraggable {
    constructor(element) {
        super();
        this.addEvent(element);
    }
    onDragstart(event) {
        // 拖拽开始阻止默认事件将不能被拖拽
        console.log(event);
        draggle.element = event.target;
        // event.preventDefault()
        console.log('拖拽开始');
        return false;
    }
    addEvent(element) {
        for (let i in draggleEvent) {
            if (element instanceof HTMLDivElement) {
                element.addEventListener(draggleEvent[i], this[i], false);
            }
        }
    }
    onDrag(event) {
        // console.log('正在拖拽')
        return true;
    }
    onDragEnd(event) {
        // 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)
        console.log('拖拽结束');
        draggle.element = null;
        return true;
    }
}
export class draggleOperation extends AbstractDraggableOperation {
    constructor(elemnet) {
        super();
        this.addEvent(elemnet);
    }
    onDragEnter(event) {
        // 当拖拽元素或选中的文本到一个可释放目标时触发(进入监听了拖拽事件的元素)
        console.log('拖拽是否进入');
        return true;
    }
    onDragLeave(event) {
        // 鼠标离开了拖拽的元素 则会触发元素
        console.log('拖拽离开');
    }
    onDragover(event) {
        // 有效的目标指的是监听了这个事件的元素是否有拖拽的元素在上面 有的话则触发
        event.preventDefault();
        if (draggle.element) {
            console.log(draggle.element.className);
            const reg = new RegExp(draggleOperation.activate_className, 'gm');
            if (!reg.test(draggle.element.className)) {
                const tag = draggle.element.className;
                draggle.element.className =
                    tag + ' ' + draggleOperation.activate_className;
            }
            console.log(draggle.element);
            //
        }
        return true;
        // console.log('拖拽是否放到有效的目标上')
    }
    onDrop(event) {
        // 当元素或选中的文本在可释放目标上被释放时触发
        console.log('可释放');
        return false;
    }
    addEvent(element) {
        for (let i in draggableEnum) {
            if (element instanceof HTMLDivElement) {
                element.addEventListener(draggableEnum[i], this[i], false);
            }
        }
    }
}
draggleOperation.activate_className = 'draggable\_activate';
