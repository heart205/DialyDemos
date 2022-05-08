/**
 * @author heart
 * @description Canvas给图片添加水印
 * @Date 2022-02-16
 */
import { trimRegExp1 } from '../../lib/tool'
// 用canvas先添加图片 然后 获取文字 添加水印

const canvas: HTMLCanvasElement | null = document && document.querySelector('#canvas')
const imgUrl =
  'https://github-readme-stats.vercel.app/api/top-langs/?username=heart205&layout=compact&theme=buefy&hide_border=true'
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
 * @param 字体应该要跟图片占比有关
 */
function ImageToCanvas(img: HTMLImageElement, text: string) {
  const fontSize = 16 + 'px'
  const lineHeight = 30
  const margin = 20
  const col = 10,
    row = 10 // 行 列的关系
  if (!canvas) return
  const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
  if (!ctx) return
  canvas.height = img.height
  canvas.width = img.width
  ctx.drawImage(img, 0, 0, img.width, img.height)
  ctx.font = fontSize + ' sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(0,0,0,.3)'
  // text 进行split固定长度切割 展示位置
  // 则 (img.width / 4) 作为一行的最大宽度 text.length * 24px 进行字符串切割
  const maxWidth: number = img.width
  const rowLength: number = Number.parseInt(maxWidth / 24 + '')
  // 去除首尾空格
  const str = trimRegExp1(text)
  if (str) {
    // TODO:换行展示
    // const regExp = new RegExp(`(?<=^(.{${rowLength}})+)`, "gm");
    // console.log("一行最大值的路径", rowLength);
    // const arr = str.replace(regExp, "\n").split("\n");
    // for (let i = 0; i < arr.length; i++) {
    //   // 除去margin
    //   ctx.fillText(
    //     arr[i],
    //     img.width / 2,
    //     img.height / 2 + img.height / 4 + i * lineHeight,
    //     rowLength * Number.parseInt(fontSize.split("px")[0]) - margin
    //   );
    // }

    // TODO: 多行多列展示
    const textValue = ctx.measureText(str)
    console.log(textValue)
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        console.log((textValue.fontBoundingBoxAscent + margin) * j)

        ctx.fillText(str, (textValue.width + margin) * i, (textValue.fontBoundingBoxAscent + margin) * j - 5)
      }
    }
  }
}

function addWaterMark(text: string) {
  getUrlToCanvas(imgUrl, text)
}

addWaterMark('heart')
