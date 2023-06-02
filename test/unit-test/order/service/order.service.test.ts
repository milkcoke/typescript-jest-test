import {OrderRepository} from '../../../../src/order/repository/order.repository'
import {Order} from '../../../../src/order/domain/order'
import {OrderService} from '../../../../src/order/service/order.service'
import {instance, mock, when} from 'ts-mockito'

// [Reference] https://jojoldu.tistory.com/638
// Why should we use ts-mockito or Sinon instead of jest when to use stub
describe('OrderService', ()=> {
  test('jest-mock 주문 미완료시 에러 발생', ()=>{
    // Arrange
    const mockRepository = new OrderRepository()
    jest.spyOn(mockRepository, 'findById').
      // 사실상 여기서 하고 있는게 stub 만들기임.
      // 아쉽게도 jest 는 stub 만들기를 지원하지 않음.
      // 즉, `findById` 를 stub 하고 있음.
      // TODO: stub 이란?
      // 여기: https://sinonjs.org/releases/v15/stubs/
      mockImplementation((orderId: number)=>{
        // stub 코드 발생 조건이 한 함수 안에 묵여있음 => SRP 원칙 위반.
        if (orderId !== 1) return undefined
        return mockRepository.createOrder()
      })
    const orderService = new OrderService(mockRepository)

    // Action
    const isCompleted = (): void => {
      return orderService.validateCompletedOrder(1)
    }

    // Assert
    expect(isCompleted).toThrowError(/아직 완료 처리되지 못했습니다./)
  })

  test('ts-mockito 주문 미완료시 에러 발생', ()=>{
    // Arrange
    const order = new Order()
    const stubRepository: OrderRepository = mock(OrderRepository)
    // conditional mocking implementation
    when(stubRepository.findById(1)).thenReturn(order)

    const orderService = new OrderService(instance(stubRepository))


    // Action
    const isCompleted = (): void => orderService.validateCompletedOrder(1)

    // Assert
    expect(isCompleted).toThrowError(/아직 완료 처리되지 못했습니다./)
  })
})