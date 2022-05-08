/**
 * @author heart
 * @description 解析路径
 * @Date 2022-05-02
 */

export function parseFile(path: string): string {
  const reg = /(.*?)\.(.*)/
  if (reg.test(path)) {
    const str = RegExp.$1
    return str.split('-')[0]
  }
  return path
}
