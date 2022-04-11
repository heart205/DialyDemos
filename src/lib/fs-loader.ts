/**
 * @author heart
 * @description 获取文件夹下的文件名
 * @Date 2022-04-11
 */
const fs = require('fs')
const path = require('path')
import type { Dirent } from 'fs'
const isFile = require('./fsTool').isFile
const isAppointFile = require('./fsTool').isAppointFile
const getFilesName = require('./fsTool').getFilesName
const entry = {}
export function getEntry(paths: string) {
  fs.readdir(paths, { withFileTypes: true }, (err: Error, files: Dirent[]) => {
    if (err) throw console.error('reddir')
    files.forEach((val: Dirent) => {
      if (isFile) {
        getEntry(path.resolve(paths, val.name))
      } else if (isAppointFile('html')) {
        const fileName = getFilesName(val.name)
        if (fileName) {
          entry[fileName] = val.name
        }
      }
    })
  })
}
module.exports = {
  entry,
}
