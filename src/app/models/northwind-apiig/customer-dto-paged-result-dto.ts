import { CustomerDto } from './customer-dto';

export interface CustomerDtoPagedResultDto {
  items?: CustomerDto[] | null;
  totalRecordsCount?: number;
  pageSize?: number;
  pageNumber?: number;
  totalPages?: number;
}
