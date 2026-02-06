import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { CustomerDtoPagedResultDto } from '../models/northwind-apiig/customer-dto-paged-result-dto';
import { EmployeeDto } from '../models/northwind-apiig/employee-dto';
import { OrderDetailDto } from '../models/northwind-apiig/order-detail-dto';
import { OrderDtoNorthwindAPIIG } from '../models/northwind-apiig/order-dto-northwind-apiig';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindAPIIGService {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerDtoPagedResultDto(pageIndex?: number, size?: number, orderBy?: string): Observable<CustomerDtoPagedResultDto | undefined> {
    let params = new HttpParams();
    if (pageIndex !== undefined) params = params.append('pageIndex', pageIndex.toString());
    if (size !== undefined) params = params.append('size', size.toString());
    if (orderBy !== undefined) params = params.append('orderBy', orderBy);
    const options = {
      params,
    };
    return this.http.get<CustomerDtoPagedResultDto | undefined>(`${API_ENDPOINT}/Customers/GetCustomersWithPage`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDtoPagedResultDto | undefined>('getCustomerDtoPagedResultDto', undefined)));
  }

  public postCustomerDto(data?: CustomerDto): Observable<CustomerDto | undefined> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    const body = data ?? {
      customerId: 'string',
      companyName: 'string',
      contactName: 'string',
      contactTitle: 'string',
      address: {
        street: 'string',
        city: 'string',
        region: 'string',
        postalCode: 'string',
        country: 'string',
        phone: '123456789'
      }
    };
    return this.http.post<CustomerDto | undefined>(`${API_ENDPOINT}/Customers`, body, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('postCustomerDto', undefined)));
  }

  public deleteCustomerDto(id: string): Observable<CustomerDto | undefined> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    return this.http.delete<CustomerDto | undefined>(`${API_ENDPOINT}/Customers/${id}`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto | undefined>('deleteCustomerDto', undefined)));
  }

  public getEmployeeDtoList(): Observable<EmployeeDto[]> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    return this.http.get<EmployeeDto[]>(`${API_ENDPOINT}/Employees`, options)
      .pipe(catchError(ErrorHandlerService.handleError<EmployeeDto[]>('getEmployeeDtoList', [])));
  }

  public putEmployeeDto(id: number, data?: EmployeeDto): Observable<EmployeeDto | undefined> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    const body = data ?? {
      employeeId: 123,
      lastName: 'string',
      firstName: 'string',
      title: 'string',
      titleOfCourtesy: 'string',
      birthDate: 'string',
      hireDate: 'string',
      addressId: 'string',
      address: {
        street: 'string',
        city: 'string',
        region: 'string',
        postalCode: 'string',
        country: 'string',
        phone: 'string'
      },
      notes: 'string',
      avatarUrl: 'string',
      reportsTo: 123
    };
    return this.http.put<EmployeeDto | undefined>(`${API_ENDPOINT}/Employees/${id}`, body, options)
      .pipe(catchError(ErrorHandlerService.handleError<EmployeeDto | undefined>('putEmployeeDto', undefined)));
  }

  public getCustomerDtoList(): Observable<CustomerDto[]> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    return this.http.get<CustomerDto[]>(`${API_ENDPOINT}/Customers`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto[]>('getCustomerDtoList', [])));
  }

  public getOrderDtoList(id = 'BLONP'): Observable<OrderDtoNorthwindAPIIG[]> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    return this.http.get<OrderDtoNorthwindAPIIG[]>(`${API_ENDPOINT}/Customers/${id}/Orders`, options)
      .pipe(catchError(ErrorHandlerService.handleError<OrderDtoNorthwindAPIIG[]>('getOrderDtoList', [])));
  }

  public getOrderDetailDtoList(id: number): Observable<OrderDetailDto[]> {
    const headers: HttpHeaders | Record<string, string | string[]> = {
      Authorization: 'Bearer <auth_value>',
    };
    const options = {
      headers,
    };
    return this.http.get<OrderDetailDto[]>(`${API_ENDPOINT}/Orders/${id}/Details`, options)
      .pipe(catchError(ErrorHandlerService.handleError<OrderDetailDto[]>('getOrderDetailDtoList', [])));
  }
}
