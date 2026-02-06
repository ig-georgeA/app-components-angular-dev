import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiig/employee-dto';
import { OrderDto } from '../models/northwind-swagger/order-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-master-detail-grid',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './master-detail-grid.component.html',
  styleUrls: ['./master-detail-grid.component.scss']
})
export class MasterDetailGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public selectedOrder?: OrderDto;
  public northwindAPIIGEmployeeDto: EmployeeDto[] = [];

  constructor(
    public northwindAPIIGService: NorthwindAPIIGService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getEmployeeDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGEmployeeDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
