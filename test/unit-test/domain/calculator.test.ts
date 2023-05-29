import {Calculator} from '../../../src/domain/calculator'

describe('Calculator', ()=>{
  const calculator = new Calculator()

  test('add - should yield 0 if an empty array is provided', ()=>{
    // Arrange
    const nums = []
    // Act
    const res = calculator.add(nums)
    // Assert
    expect(res).toEqual(0)
  })

  test('fail - transformed to number when input is number string', ()=>{
    const value = '45'

    const res = calculator.transformToNumber(value)

    expect(typeof res).toBe('number')
  })

  test('NaN is number type', ()=>{
    const infinityNumber = 1 / 0
    expect(infinityNumber).not.toBeNaN()
    expect(typeof infinityNumber).toEqual('number')
  })
})