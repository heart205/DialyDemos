/**
 * 去除收尾空格
 * @param str
 * @returns
 */
export function trimRegExp1(str: string) {
  const reg = /^\s+|\s+$/g
  return str.replace(reg, '')
}

/**
 * month day 前置加0操作
 * @param str
 * @returns
 */
export function preZeronDate(str: string) {
  const reg = /^(?=\d$)/
  return str.replace(reg, '0')
}

/**
 * 添加前置0操作
 * @param str
 * @param target
 * @returns
 */
export function preZeronDateReplace(str: string, target: number) {
  return str.padStart(target, '0')
}
