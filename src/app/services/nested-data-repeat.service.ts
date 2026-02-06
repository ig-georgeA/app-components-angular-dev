import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NestedDataType } from '../models/nested-data-repeat/nested-data-type';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class NestedDataRepeatService {
  constructor(
    private http: HttpClient
  ) { }

  public getNestedData(): Observable<NestedDataType | undefined> {
    return this.http.get<NestedDataType | undefined>("https://raw.githubusercontent.com/zdrawku/data/master/IGDSC-Library.json")
      .pipe(catchError(ErrorHandlerService.handleError<NestedDataType | undefined>('getNestedData', undefined)));
  }
}
