import { Component, OnDestroy, OnInit } from '@angular/core';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { StocksType } from '../models/financial/stocks-type';
import { TransformDataPipe } from '../pipes/transform-data.pipe';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-financial-chart',
  imports: [IgxFinancialChartModule, TransformDataPipe],
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.scss']
})
export class FinancialChartComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialStocks: StocksType[] = [];

  constructor(
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.financialService.getStocks().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialStocks = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
