import './index.less'
import { factoryProgress } from './progress'
import { factoryProgressLine } from './line-progress'
import { cardFactory } from './card-progress'
const app = document.getElementById('home')

const progress = [
  {
    title: '高级程序设计',
    currentProgress: 120,
    totalProgress: 931,
  },
]

progress.forEach((val) => {
  const percent = val.currentProgress / val.totalProgress
  // 传入百分比
  app?.appendChild(factoryProgress(percent, val.title))
  app?.appendChild(factoryProgressLine(percent, val.title))
  app?.appendChild(cardFactory(percent, val.title))
})
