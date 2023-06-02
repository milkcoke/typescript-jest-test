import {Order} from '../domain/order'

export class OrderRepository {
  private readonly _orders: Map<number, Order> = new Map()
  createOrder(): Order {
    const newOrder = new Order()
    this._orders.set(newOrder.orderId, newOrder)
    return newOrder
  }
  findById(orderId: number): Order | undefined {
    return this._orders.get(orderId)
  }
}