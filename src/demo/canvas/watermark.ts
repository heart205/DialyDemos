/**
 * @author heart
 * @description Canvas给图片添加水印
 * @Date 2022-02-16
 */
import { trimRegExp1 } from '../../lib/tool.js'
// 用canvas先添加图片 然后 获取文字 添加水印
let canvas: HTMLCanvasElement | null = document.querySelector('#canvas')

const imgUrl =
  'https://crmuat.sunlordinc.com:10000/fc/file/v6/download/99584eb3-7c85-4878-816e-1efc8f0ebf49.png'
/**
 * 获取图片地址 加载图片后添加水印
 */
function getUrlToCanvas(url: string, text: string) {
  const img: HTMLImageElement = new Image()
  img.src = url
  img.addEventListener('load', () => {
    // 调用canvas画图片
    ImageToCanvas(img, text)
  })
}

/**
 * @description 绘画图片
 * @param
 */
function ImageToCanvas(img: HTMLImageElement, text: string) {
  const fontSize = 24 + 'px'
  const lineHeight = 30
  const margin = 20
  if (!canvas) return
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
  if (!ctx) return
  canvas.height = img.height
  canvas.width = img.width
  ctx.drawImage(img, 0, 0, img.width, img.height)
  ctx.font = fontSize + ' sans-serif'
  ctx.textAlign = 'center'
  // text 进行split固定长度切割 展示位置
  // 则 (img.width / 4) 作为一行的最大宽度 text.length * 24px 进行字符串切割
  const maxWidth: number = img.width
  const rowLength: number = Number.parseInt(maxWidth / 24 + '')
  // 去除首尾空格
  const str = trimRegExp1(text)
  if (str) {
    const regExp = new RegExp(`(?<=^(.{${rowLength}})+)`, 'gm')
    console.log('一行最大值的路径', rowLength)
    const arr = str.replace(regExp, '\n').split('\n')
    for (let i = 0; i < arr.length; i++) {
      // 除去margin
      ctx.fillText(
        arr[i],
        img.width / 2,
        img.height / 2 + img.height / 4 + i * lineHeight,
        rowLength * Number.parseInt(fontSize.split('px')[0]) - margin
      )
    }
  }
}

function addWaterMark(text: string) {
  getUrlToCanvas(imgUrl, text)
}

addWaterMark(
  'React 16 依赖集合类型 Map 和 Set 。如果你要支持无法原生提供这些能力（例如 IE < 11）或实现不规范（例如 IE 11）的旧浏览器与设备，考虑在你的应用库中包含一个全局的 polyfill ，例如 core-js。'
)
