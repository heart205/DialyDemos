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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var draggle_1;
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
    replacrClassName(str, e) {
        const reg = new RegExp(deaggable.activate_className, 'gm');
        e.className = str.replace(reg, '');
    }
    testClassName(str) {
        const reg = new RegExp(deaggable.activate_className, 'gm');
        return reg.test(str);
    }
    addClassName(e) {
        const tag = e.className;
        if (!this.testClassName(tag)) {
            e.className = tag + ' ' + deaggable.activate_className;
        }
    }
}
deaggable.activate_className = 'draggable_activate';
function addEvent(target) {
    target.prototype.addEvent = function (element) {
        if (this.signParam === 'draggle') {
            for (let i in draggleEvent) {
                if (element instanceof Element) {
                    element.addEventListener(draggleEvent[i], this[i], false);
                }
            }
        }
        else if (this.signParam === 'draggleOperation') {
            for (let i in draggableEnum) {
                if (element instanceof Element) {
                    this.element = element; // 存放可以操作拖拽的DOM
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
        super();
        this.signParam = 'draggle';
        this.onDrag = this.onDrag.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragstart = this.onDragstart.bind(this);
    }
    onDragstart(event) {
        // 拖拽开始阻止默认事件将不能被拖拽
        // console.log(event)
        if (!draggle_1.element) {
            draggle_1.element = event.target;
        }
        // event.preventDefault()
        // console.log('拖拽开始')
        return false;
    }
    onDrag(event) {
        // console.log('正在拖拽')
        return true;
    }
    onDragEnd(event) {
        // 当拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)
        console.log('拖拽结束');
        const str = draggle_1.element.className;
        this.replacrClassName(str, draggle_1.element);
        draggle_1.element = null;
        return true;
    }
};
draggle = draggle_1 = __decorate([
    addEvent,
    __metadata("design:paramtypes", [])
], draggle);
export { draggle };
let draggleOperation = class draggleOperation extends AbstractDraggableOperation {
    constructor() {
        super();
        this.signParam = 'draggleOperation';
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragover = this.onDragover.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
    }
    onDragEnter(event) {
        console.log('拖拽是否进入');
        // 当拖拽元素或选中的文本到一个可释放目标时触发(进入监听了拖拽事件的元素)
        this.addElement = factoryElement('li', {}, draggle.element);
        return true;
    }
    onDragLeave(event) {
        // 鼠标离开了拖拽的元素 则会触发元素
        if (this.addElement !== null) {
            this.addElement = null;
        }
        console.log('拖拽离开');
    }
    onDragover(event) {
        // 有效的目标指的是监听了这个事件的元素是否有拖拽的元素在上面 有的话则触发
        event.preventDefault();
        if (draggle.element) {
            // console.log(draggle.element.className)
            if (!this.testClassName(draggle.element.className)) {
                this.addClassName(draggle.element);
            }
            // console.log(draggle.element)
        }
        return true;
        // console.log('拖拽是否放到有效的目标上')
    }
    onDrop(event) {
        // 当元素或选中的文本在可释放目标上被释放时触发
        // 将元素添加到dom中
        console.log('被释放的时候出发');
        console.log(this.addElement);
        if (this.addElement) {
            this.element.appendChild(this.addElement);
            this.addElement = null;
        }
        console.log(event);
        return false;
    }
};
draggleOperation = __decorate([
    addEvent,
    __metadata("design:paramtypes", [])
], draggleOperation);
export { draggleOperation };
export function factoryElement(str, options, e) {
    if (document) {
        const el = document.createElement(str, options);
        el.className = 'draggable_moving';
        if (e) {
            const context = document.createTextNode(e.innerHTML);
            el.appendChild(context);
        }
        return el;
    }
    return null;
}
