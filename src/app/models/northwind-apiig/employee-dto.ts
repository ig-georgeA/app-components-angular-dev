import { AddressDtoNorthwindAPIIG } from './address-dto-northwind-apiig';

export interface EmployeeDto {
  employeeId?: number;
  lastName: string;
  firstName?: string | null;
  title?: string | null;
  titleOfCourtesy?: string | null;
  birthDate?: Date | null;
  hireDate?: Date | null;
  addressId?: string | null;
  address?: AddressDtoNorthwindAPIIG | null;
  notes?: string | null;
  avatarUrl?: string | null;
  reportsTo?: number;
}
