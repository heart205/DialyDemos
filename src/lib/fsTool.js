/**
 * 是否是文件
 * @param str
 * @returns boolean
 */
function isFile(str) {
  var reg = /.*?\..*$/g
  return reg.test(str)
}
/**
 * 是否为指定文件
 * @param str
 * @param options
 * @returns boolean
 */
function isAppointFile(str, options) {
  var reg = new RegExp('.*?.'.concat(options, '$'), 'g')
  return reg.test(str)
}
/**
 * 获取文件名
 * @param str
 * @returns
 */
function getFilesName(str) {
  var reg = /\/?(.*)\..*$/g
  if (reg.test(str)) {
    return RegExp.$1
  }
  return null
}
module.exports = {
  isAppointFile: isAppointFile,
  isFile: isFile,
  getFilesName: getFilesName,
}
