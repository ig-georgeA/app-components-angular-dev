import { AddressDtoNorthwindAPIIG } from './address-dto-northwind-apiig';

export interface CustomerDto {
  customerId?: string | null;
  companyName: string;
  contactName?: string | null;
  contactTitle?: string | null;
  address?: AddressDtoNorthwindAPIIG | null;
}
