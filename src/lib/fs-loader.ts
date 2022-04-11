/**
 * @author heart
 * @description 获取文件夹下的文件名
 * @Date 2022-04-11
 */
import { Dirent } from 'fs'
const fs = require('fs')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const isFile = require('./fsTool').isFile
const isAppointFile = require('./fsTool').isAppointFile
const getFilesName = require('./fsTool').getFilesName
const entry: Record<string, unknown> = {}
interface templateAttribute {
  template: string
  filename: string
  chunks: string[]
}
const filePath = 'html'
const htmlTemplateAttribute: templateAttribute[] = []
export function getEntry(paths: string) {
  fs.readdir(paths, { withFileTypes: true }, (err: Error, files: Dirent[]) => {
    if (err) throw console.error('reddir')
    files.forEach((val: Dirent) => {
      if (!isFile(val.name)) {
        getEntry(path.resolve(paths, val.name))
      } else if (isAppointFile(val.name, 'html')) {
        const fileName = getFilesName(val.name)
        if (fileName) {
          entry[fileName] = val.name
        }
      }
    })
  })
}
/**
 * 同步方法更新path
 * @param p path
 */
export function getEntryAsync(p: string) {
  try {
    const dirent: Dirent[] = fs.readdirSync(p, { withFileTypes: true })
    dirent.forEach((val: Dirent) => {
      if (!isFile(val.name)) {
        getEntryAsync(path.resolve(p, val.name))
      } else if (isAppointFile(val.name, 'js')) {
        const fileName = getFilesName(val.name)
        if (fileName) {
          const fileLastName = p.split('/')
          if (fileLastName.length > 1) {
            const prefixFile = fileLastName[fileLastName.length - 1]
            entry[prefixFile + '_' + fileName] = p + '/' + val.name
          }
        }
      } else if (isAppointFile(val.name, 'ts')) {
        const fileName = getFilesName(val.name)
        if (fileName) {
          const fileLastName = p.split('/')
          if (fileLastName.length > 1) {
            const prefixFile = fileLastName[fileLastName.length - 1]
            entry[prefixFile + '_' + fileName] = p + '/' + val.name
            const index = dirent.findIndex((val) => val.name === [fileName, filePath].join('.'))
            if (index > -1) {
              htmlTemplateAttribute.push({
                template: p + '/' + val.name.replace('ts', filePath),
                filename: prefixFile + '_' + fileName + '.' + filePath,
                chunks: [prefixFile + '_' + fileName],
              })
            }
          }
        }
      }
    })
  } catch (e) {
    console.error(e)
  }
}

getEntryAsync('./src/demo')
module.exports = {
  entry,
}
