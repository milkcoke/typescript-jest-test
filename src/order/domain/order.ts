import {ORDER_STATUS, TOrderStatus} from './orderStatus'

export class Order {
  static idx = 0
  private readonly _orderId : number
  private _status: TOrderStatus
  constructor() {
    ++Order.idx
    this._orderId = Order.idx
  }

  get orderId(): number {
    return this._orderId
  }

  isNotCompleted(): boolean {
    return this._status !== ORDER_STATUS.COMPLETED
  }
}