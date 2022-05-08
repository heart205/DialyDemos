import './index.less'
import { parseFile } from './utils/parseFile'
const app = document.getElementById('app')
function createDivElement(innerHTML: string) {
  const div = document.createElement('div')
  div.innerHTML = innerHTML
  return div
}

function addBoxShadow(element: HTMLElement) {
  element.style.boxShadow = '0 0 3px rgba(0,0,0,.2)'
  element.className = 'm-12 p-3'
}

function addEventListener(element: HTMLElement, eventName: string, handler: (event: Event) => void) {
  element.addEventListener(eventName, handler, false)
}
function toPath(e: Event) {
  const div = e.target
  if (div instanceof HTMLDivElement) {
    const path = div.title
    if (path) {
      window.location.href = window.location.origin + '/' + path
    }
  }
}

const temp = (process as unknown as process).template

temp.forEach((val) => {
  val.name = parseFile(val.filename)
})

temp.forEach((val) => {
  const div = createDivElement(val.name || 'pages')
  if (val.name) {
    div.title = val.filename
  }
  addBoxShadow(div)
  addEventListener(div, 'click', toPath)
  app && app.appendChild(div)
})
