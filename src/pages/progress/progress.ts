/**
 * @author heart
 * @description 普通任务进度长度表
 * @Date 2022-05-02
 */
export const width = 264

export function factoryProgress(percent: number, innerHTML: string) {
  const progress = document.createElement('div')
  progress.className = 'flex items-center'
  const label = document.createElement('div')
  label.innerHTML = innerHTML
  progress.appendChild(label)
  const progressPercent = document.createElement('div')
  progressPercent.className = 'm-6 h-2 rounded-lg bg-gray-100'
  progressPercent.style.width = `${width}px`
  const progressBar = document.createElement('div')
  progressBar.className = 'h-2 rounded-lg bg-blue-600 relative'
  progressBar.setAttribute('style', `width:${percent * width}px`)
  const progressBarInner = document.createElement('div')
  progressBarInner.className = 'absolute right-0 -top-0.5 w-3 h-3 border-2 border-blue-500 bg-white rounded-full'
  progressBar.appendChild(progressBarInner)
  progressPercent.appendChild(progressBar)
  progress.appendChild(progressPercent)
  return progress
}
