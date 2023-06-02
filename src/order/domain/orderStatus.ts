export const ORDER_STATUS = {
  READY: 'READY',
  DELIVERY: 'DELIVERY',
  COMPLETED: 'COMPLETED'
} as const

export type TOrderStatus = keyof typeof ORDER_STATUS