/**
 * @author heart
 * @description 线性进度条
 * @Date 2022-05-02
 */
const number = 6
const lineWidth = 40 //单个线条宽度

function factoryLine(num?: number) {
  const line = document.createElement('div')
  line.className = 'w-10 mr-1 h-2 rounded-lg bg-gray-100'
  if (num) {
    const d = document.createElement('div')
    d.className = 'h-2 rounded-lg bg-blue-600'
    d.setAttribute('style', `width:${num * lineWidth}px`)
    line.appendChild(d)
  }
  return line
}

/**
 *
 * @param percent 百分比
 * @param innerHTML
 * @returns
 */
export function factoryProgressLine(percent: number, innerHTML: string) {
  const totalWidth = number * lineWidth
  const width = percent * totalWidth
  const oneLineWidth = 100 / number
  // num => 100
  console.log(oneLineWidth)
  const progress = document.createElement('div')
  progress.className = 'flex items-center'
  const label = document.createElement('div')
  label.innerHTML = innerHTML
  progress.appendChild(label)
  const progressTotal = document.createElement('div')
  progressTotal.className = 'flex m-6'
  progress.appendChild(progressTotal)

  for (let i = 0; i < number; i++) {
    if (width >= (i + 1) * oneLineWidth) {
      progressTotal.appendChild(factoryLine(1))
    } else {
      const w = width - i * oneLineWidth
      if (w > 0) {
        progressTotal.appendChild(factoryLine(w / oneLineWidth))
      } else {
        progressTotal.appendChild(factoryLine(0))
      }
    }
  }
  return progress
}
