import './index.less'

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const hourUnit = document.querySelector('.unit-hour')
const minuteUnit = document.querySelector('.unit-minute')
const secondUnit = document.querySelector('.unit-second')
setInterval(() => {
  if (hour) {
    hour.innerHTML = String(new Date().getHours())
  }

  if (minute) {
    let m = String(new Date().getMinutes())
    m.length == 1 ? (m = '0' + m) : m
    minute.innerHTML = m
  }

  if (second) {
    let s = String(new Date().getSeconds())
    s.length == 1 ? (s = '0' + s) : s
    second.innerHTML = s
  }

  if (secondUnit) {
    secondUnit.setAttribute('style', `transform: rotate(${new Date().getSeconds() * 6 + 90}deg)`)
  }
  if (minuteUnit) {
    minuteUnit.setAttribute(
      'style',
      `transform: rotate(${new Date().getMinutes() * 6 + new Date().getSeconds() / 10 + 90}deg)`
    )
  }

  if (hourUnit) {
    hourUnit.setAttribute(
      'style',
      `transform: rotate(${
        new Date().getHours() * 30 + new Date().getMinutes() * 0.5 + new Date().getSeconds() / 120 + 90
      }deg)`
    )
  }
}, 1000)
