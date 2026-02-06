import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { GlobalElectricityDemandType } from '../models/financial/global-electricity-demand-type';
import { TradingType } from '../models/financial/trading-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-category-charts',
  imports: [IgxCategoryChartModule, IgxPieChartModule],
  templateUrl: './category-charts.component.html',
  styleUrls: ['./category-charts.component.scss']
})
export class CategoryChartsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];
  public financialGlobalElectricityDemand: GlobalElectricityDemandType[] = [];
  public financialTrading: TradingType[] = [];

  constructor(
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialBoxOfficeRevenue = data
    );
    this.financialService.getGlobalElectricityDemand().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialGlobalElectricityDemand = data
    );
    this.financialService.getTrading().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialTrading = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
