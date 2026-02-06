import { AddressType } from './address-type';

export interface Employees2Type1 {
  employeeID?: number;
  lastName?: string;
  firstName?: string;
  title?: string;
  titleOfCourtesy?: string;
  birthDate?: Date;
  hireDate?: Date;
  address?: AddressType;
  managerID?: number;
  notes?: string;
  avatarUrl?: string;
}
