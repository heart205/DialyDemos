import { preZeronDateReplace } from '../lib/tool'

describe('preZeronDateReplace result 01', () => {
  it('test', () => {
    expect(preZeronDateReplace(new Date().getMonth() + 1 + '', 2)).toBe('02')
  })
})
