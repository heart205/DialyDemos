import type { REGISTER_INSTANCE, Service } from 'ts-node'
import './index.less'
interface templateAttribute {
  template: string
  filename: string
  chunks: string[]
}

interface imlProcess {
  [REGISTER_INSTANCE]?: Service
  template: templateAttribute[]
}
// 更新页面
const btn = document.getElementById('app')

const template = (process as unknown as imlProcess).template

function toPath(e: MouseEvent) {
  const div = e.target
  if (div instanceof HTMLDivElement) {
    const path = div.getAttribute('toPath')

    window.location.href = window.location.origin + '/' + path
  }
}

template.forEach((val: templateAttribute) => {
  const div = document.createElement('div')
  div.innerHTML = val.filename
  div.setAttribute('toPath', val.filename)
  btn?.appendChild(div)
})
btn?.addEventListener('click', toPath, false)
