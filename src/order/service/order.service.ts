import {OrderRepository} from '../repository/order.repository'

export class OrderService {
  constructor(private readonly _orderRepository: OrderRepository) {
  }

  validateCompletedOrder(orderId: number): void {
    const order = this._orderRepository.findById(orderId)
    if (order.isNotCompleted()) {
      throw new Error('아직 완료 처리되지 못했습니다.')
    }
  }
}