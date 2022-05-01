const btn = document.getElementById('btn')
const svg = document.getElementById('svg')
// 实现放大缩小 旋转功能
function handleClickSvg(event: MouseEvent) {
  const target = event.target as SVGElement
  target.setAttribute('transform', 'scale(1.5)')
}
function handleClick() {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('width', '100')
  rect.setAttribute('height', '100')
  rect.setAttribute('fill', 'red')
  rect.setAttribute('x', '0')
  rect.setAttribute('y', '0')
  rect.addEventListener('click', handleClickSvg, false)
  g.appendChild(rect)
  svg?.appendChild(g)
}
if (btn) {
  btn.addEventListener('click', handleClick, false)
}
