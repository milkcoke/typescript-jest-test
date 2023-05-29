
export class Calculator {
  add(nums: number[]): number {
    return nums.reduce((previousValue, currentValue)=>{
      return previousValue + currentValue
    }, 0)
  }

  transformToNumber(value: string): number {
    return +value
  }
}