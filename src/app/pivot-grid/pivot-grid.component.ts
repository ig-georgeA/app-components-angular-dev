import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_PIVOT_GRID_DIRECTIVES } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { StocksType } from '../models/financial/stocks-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-pivot-grid',
  imports: [IGX_PIVOT_GRID_DIRECTIVES],
  templateUrl: './pivot-grid.component.html',
  styleUrls: ['./pivot-grid.component.scss']
})
export class PivotGridComponent implements OnInit, OnDestroy {
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
