/**
 * @author heart
 * @description 卡片步骤条
 * @Date 2022-05-03
 */

const bgIndex = 9
const zIndex = 10
const oneStepsWidth = 100

/**
 *
 * @param steps 总共的步数
 * @param currentStep 当前的步数
 * @returns
 */
export function cardStepsFactory(steps = 2, currentStep = 0) {
  const width = oneStepsWidth * steps

  let i = 2
  const cardSteps = document.createElement('div')
  cardSteps.className = 'card-steps h-12 bg-gray-100 rounded-lg leading-6 flex items-center overflow-hidden'
  cardSteps.style.width = `${width}px`
  // 计算每一步的长度
  const cardStepsFirst = document.createElement('div')
  cardStepsFirst.className =
    'text-center relative z-10  bg-blue-900 h-full  line-height-3 card-steps-first' +
    (currentStep === 1 ? ' card-steps-active' : '')
  cardStepsFirst.style.width = `${oneStepsWidth}px`
  cardStepsFirst.style.zIndex = '1000'
  const cardStepsFirstSpan = document.createElement('span')
  cardStepsFirstSpan.className = 'relative  text-white'
  cardStepsFirstSpan.innerText = 'Step1'
  cardStepsFirst.appendChild(cardStepsFirstSpan)
  cardSteps.appendChild(cardStepsFirst)
  for (; i < steps; i++) {
    const cardStepsMiddles = document.createElement('div')
    cardStepsMiddles.className =
      `relative text-center  bg-blue-${bgIndex - i}00 h-full line-height-3 card-steps-first` +
      (currentStep === i ? ' card-steps-active' : '')
    cardStepsMiddles.style.width = `${oneStepsWidth}px`
    cardStepsMiddles.style.zIndex = `${zIndex - i}0`
    const cardStepsSpanMiddles = document.createElement('span')
    cardStepsSpanMiddles.className = 'text-slate-200'
    cardStepsSpanMiddles.innerText = 'Step' + i
    cardStepsMiddles.appendChild(cardStepsSpanMiddles)
    cardSteps.appendChild(cardStepsMiddles)
  }
  const cardStepsThird = document.createElement('div')
  cardStepsThird.className = 'flex-1 text-center' + (currentStep === i ? ' card-steps-active' : '')
  const cardStepsThirdSpan = document.createElement('span')
  cardStepsThirdSpan.className = 'relative'
  cardStepsThirdSpan.innerText = 'Step' + i
  cardStepsThird.appendChild(cardStepsThirdSpan)
  cardSteps.appendChild(cardStepsThird)
  return cardSteps
}
