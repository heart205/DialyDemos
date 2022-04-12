

interface getNoAuthUrlObj {
  /**
   * @param {string} systemName 系统名称
   */
  systemName: string
  /**
   * @param {string} bipName 联系人【联系人BIP】
   */
  bipName: string
  /**
   * @param {string}  telephone 联系人电话
   */
  telephone: string
  /**
   * @param {string}  reason 原因
   */
  reason: string
}
type K = Record<keyof getNoAuthUrlObj, string>

export {}
