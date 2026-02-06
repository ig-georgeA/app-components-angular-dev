import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { EmployeesType } from '../models/northwind/employees-type';
import { StocksType } from '../models/financial/stocks-type';
import { TransformDataPipe } from '../pipes/transform-data.pipe';
import { FinancialService } from '../services/financial.service';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-css-grid-layout',
  imports: [IGX_LIST_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxFinancialChartModule, IgxAvatarComponent, IgxIconComponent, TransformDataPipe],
  templateUrl: './css-grid-layout.component.html',
  styleUrls: ['./css-grid-layout.component.scss']
})
export class CSSGridLayoutComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listSelectedItem5?: CustomerDto;
  public northwindAPIIGCustomerDto: CustomerDto[] = [];
  public northwindEmployees: EmployeesType[] = [];
  public financialStocks: StocksType[] = [];

  constructor(
    public northwindAPIIGService: NorthwindAPIIGService,
    public northwindService: NorthwindService,
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGCustomerDto = data
    );
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
    this.financialService.getStocks().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialStocks = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
