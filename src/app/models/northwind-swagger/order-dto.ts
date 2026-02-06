import { AddressDto } from './address-dto';

export interface OrderDto {
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
  shipAddress?: AddressDto | null;
}
