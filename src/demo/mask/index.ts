import './index.less'

const img = document.querySelector('img')

img?.addEventListener(
  'click',
  function () {
    if (document.body.className === 'mask') {
      document.body.className = ''
      img.className = ''
      img.setAttribute('style', '')
    } else {
      document.body.className = 'mask'
      img.className = 'mask-img'
      const rect = img.getBoundingClientRect()
      const width = document.body.clientWidth - rect.left - img.offsetWidth
      const height = document.body.clientHeight - rect.height - img.offsetHeight
      img.setAttribute('style', `transform: translate(${width / 2}px,${height / 2}px)`)
    }
  },
  false
)
