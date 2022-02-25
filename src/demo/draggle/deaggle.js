/**
 * @author heart
 * @description
 * @Date 2022-02-25
 * 待设计：吸附的过程中添加吸附的参考线
 * 以及 设计一个draggleOperation的一个dom元素 增加样式占位等
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var draggle_1, draggleOperation_1;
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
class deaggable {
}
function addEvent(target) {
    target.prototype.addEvent = function (element) {
        if (this.signParam === 'draggle') {
            for (let i in draggleEvent) {
                if (element instanceof HTMLDivElement) {
                    element.addEventListener(draggleEvent[i], this[i], false);
                }
            }
        }
        else if (this.signParam === 'draggleOperation') {
            for (let i in draggableEnum) {
                if (element instanceof HTMLDivElement) {
                    element.addEventListener(draggableEnum[i], this[i], false);
                }
            }
        }
    };
}
class AbstractDraggable extends deaggable {
}
class AbstractDraggableOperation extends deaggable {
}
let draggle = draggle_1 = class draggle extends AbstractDraggable {
    constructor() {
        super(...arguments);
        this.signParam = 'draggleOperation';
    }
    onDragstart(event) {
        // 拖拽开始阻止默认事件将不能被拖拽
        console.log(event);
        draggle_1.element = event.target;
        // event.preventDefault()
        console.log('拖拽开始');
        return false;
    }
    onDrag(event) {
        // console.log('正在拖拽')
        return true;
    }
    onDragEnd(event) {
        // 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)
        console.log('拖拽结束');
        draggle_1.element = null;
        return true;
    }
};
draggle = draggle_1 = __decorate([
    addEvent
], draggle);
export { draggle };
let draggleOperation = draggleOperation_1 = class draggleOperation extends AbstractDraggableOperation {
    constructor() {
        super(...arguments);
        this.signParam = 'draggleOperation';
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
            const reg = new RegExp(draggleOperation_1.activate_className, 'gm');
            if (!reg.test(draggle.element.className)) {
                const tag = draggle.element.className;
                draggle.element.className =
                    tag + ' ' + draggleOperation_1.activate_className;
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
};
draggleOperation.activate_className = 'draggable_activate';
draggleOperation = draggleOperation_1 = __decorate([
    addEvent
], draggleOperation);
export { draggleOperation };
