/**
 * @author heart
 * @description 卡片进度
 * @Date 2022-05-03
 */

const width = 256
export function cardFactory(percent: number, innerHTML: string) {
  const progress = document.createElement('div')
  progress.className = 'overflow-hidden rounded-t-xl rounded-b-sm inline-block'
  progress.style.width = `${width}px`
  const progressBar = document.createElement('div')
  progressBar.className = 'h-14  font-sans bg-gray-50 flex items-center'
  progress.appendChild(progressBar)
  const progressBarLeft = document.createElement('div')
  progressBarLeft.className = 'w-1/3 text-center text-sm text-blue-400'
  progressBarLeft.innerHTML = `${Number(percent * 100).toFixed(2)}%`
  progressBar.appendChild(progressBarLeft)
  const progressBarDetail = document.createElement('div')
  progressBarDetail.className = 'w-1/3 text-center truncate'
  progressBarDetail.innerHTML = innerHTML
  progressBar.appendChild(progressBarDetail)
  const progressBarRight = document.createElement('div')
  progressBarRight.className = 'w-1/3 text-center text-sm text-blue-400'
  progressBarRight.innerHTML = 'success'
  progressBar.appendChild(progressBarRight)
  const progressBarLine = document.createElement('div')
  progressBarLine.className = 'w-full h-1.5   bottom-0 bg-gray-100'
  progress.appendChild(progressBarLine)
  const progressBarLineWidth = document.createElement('div')
  progressBarLineWidth.className = 'h-1.5 bg-blue-600'
  progressBarLineWidth.style.width = `${percent * width}px`
  progressBarLine.appendChild(progressBarLineWidth)
  return progress
}
