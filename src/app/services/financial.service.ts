import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { GlobalElectricityDemandType } from '../models/financial/global-electricity-demand-type';
import { StocksType } from '../models/financial/stocks-type';
import { TradingType } from '../models/financial/trading-type';
import { Financial } from '../static-data/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  public getStocks(): Observable<StocksType[]> {
    return of(Financial['StocksType']);
  }

  public getBoxOfficeRevenue(): Observable<BoxOfficeRevenueType[]> {
    return of(Financial['BoxOfficeRevenueType']);
  }

  public getGlobalElectricityDemand(): Observable<GlobalElectricityDemandType[]> {
    return of(Financial['GlobalElectricityDemandType']);
  }

  public getTrading(): Observable<TradingType[]> {
    return of(Financial['TradingType']);
  }
}
