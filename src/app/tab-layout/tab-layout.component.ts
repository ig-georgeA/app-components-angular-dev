import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { EmployeeDto } from '../models/northwind-apiig/employee-dto';
import { EmployeesType } from '../models/northwind/employees-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-tab-layout',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconButtonDirective, IgxCategoryChartModule, IgxIconComponent, IgxButtonDirective, FormsModule],
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public value1?: string;
  public value2?: string;
  public northwindAPIIGCustomerDto: CustomerDto[] = [];
  public northwindAPIIGEmployeeDto: EmployeeDto[] = [];
  public northwindEmployees: EmployeesType[] = [];
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(
    public northwindAPIIGService: NorthwindAPIIGService,
    public northwindService: NorthwindService,
    public financialService: FinancialService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGCustomerDto = data
    );
    this.northwindAPIIGService.getEmployeeDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGEmployeeDto = data
    );
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
    this.financialService.getBoxOfficeRevenue().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.financialBoxOfficeRevenue = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
