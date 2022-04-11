import { preZeronDateReplace } from '../lib/tool'
const isFile = require('../lib/fsTool').isFile
const isAppointFile = require('../lib/fsTool').isAppointFile
describe('preZeronDateReplace result 01', () => {
  it('test', () => {
    const month = new Date().getMonth() + 1

    expect(preZeronDateReplace(new Date().getMonth() + 1 + '', 2)).toBe(month < 10 ? '0' + month : month + '')
  })
})

describe('is file', () => {
  it('not file', () => {
    expect(isFile('test')).toBe(false)
  })

  it('is file', () => {
    expect(isFile('index.html')).toBe(true)
  })

  it('is typescript file', () => {
    expect(isFile('index.ts')).toBe(true)
  })
})

describe('is approve files', () => {
  it('is ts file', () => {
    expect(isAppointFile('index.ts', 'ts')).toBe(true)
  })

  it('is html file', () => {
    expect(isAppointFile('index.html', 'html')).toBe(true)
  })
})
