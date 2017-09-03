// 测试模块内部方法
const rewire = require('rewire')
const datedog = rewire('../lib/index')

// should 和 chai，以及 node 自带的 asserts 都是断言库
const should = require('should')

describe('测试时间间隔', () => {
  it('2017-09-01 和 2017-09-02 间隔 1 天', () => {
    datedog.calcDateInterval('2017-09-01', '2017-09-02').should.equal(1)
  })

  it('2014-06-28 和 2017-09-01 间隔 1161 天', () => {
    datedog.calcDateInterval('2014-06-28', '2017-09-01').should.equal(1161)
  })

  // it('2017-09-02 和 2014-06-29 间隔 1161 天', () => {
  //   datedog.calcDateInterval('2017-09-02', '2014-06-29').should.equal(1161)
  // })
})

describe('测试某一日期 xx 天前的日期', () => {
  it('2017-09-01 1314 天前是 2014-01-26', () => {
    datedog.calcBefore(1314, '2017-09-01').should.equal('2014-01-26')
  })

  it('2017-09-01 1161 天前是 2014-06-28', () => {
    datedog.calcBefore(1161, '2017-09-01').should.equal('2014-06-28')
  })

  it('2017-09-02 1 天前是 2017-09-01', () => {
    datedog.calcBefore(1, '2017-09-02').should.equal('2017-09-01')
  })
})

describe('测试某一日期 xx 天后的日期', () => {
  it('2014-06-28 1314 天后是 2018-02-01', () => {
    datedog.calcAfter(1314, '2014-06-28').should.equal('2018-02-01')
  })

  it('1991-09-14 2 天后是 1991-09-16', () => {
    datedog.calcAfter(2, '1991-09-14').should.equal('1991-09-16')
  })

  it('2014-06-28 1161 天后是 2017-09-01', () => {
    datedog.calcAfter(1161, '2014-06-28').should.equal('2017-09-01')
  })
})

describe('测试模块内部方法 _addPaddingZero（用于日期前置补零）', () => {
  let _addPaddingZero = datedog.__get__('_addPaddingZero')

  it('1 前置补 0 是 01', () => {
    _addPaddingZero(1).should.equal('01')
  })

  it('9 前置补 0 是 09', () => {
    _addPaddingZero(9).should.equal('09')
  })

  it('10 前置补 0 是 10', () => {
    _addPaddingZero(10).should.equal('10')
  })

  it('20 前置补 0 是 20', () => {
    _addPaddingZero(20).should.equal('20')
  })
})