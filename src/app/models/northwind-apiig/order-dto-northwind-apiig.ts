import { AddressDtoNorthwindAPIIG } from './address-dto-northwind-apiig';

export interface OrderDtoNorthwindAPIIG {
  orderId?: number;
  customerId: string;
  employeeId?: number;
  shipperId?: number | null;
  orderDate?: Date | null;
  requiredDate?: Date | null;
  shipVia?: string | null;
  freight?: number;
  shipName?: string | null;
  completed?: boolean;
  shipAddress?: AddressDtoNorthwindAPIIG | null;
}
