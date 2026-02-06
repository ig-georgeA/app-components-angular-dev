import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGridCreatedEventArgs, IGX_HIERARCHICAL_GRID_DIRECTIVES } from 'igniteui-angular';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { OrderDtoNorthwindAPIIG } from '../models/northwind-apiig/order-dto-northwind-apiig';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-hierarchical-grid',
  imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES],
  templateUrl: './hierarchical-grid.component.html',
  styleUrls: ['./hierarchical-grid.component.scss']
})
export class HierarchicalGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindAPIIGCustomerDto: CustomerDto[] = [];

  constructor(
    public northwindAPIIGService: NorthwindAPIIGService,
  ) {}


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindAPIIGCustomerDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async gridCreatedOrderDto(e: IGridCreatedEventArgs): Promise<void> {
    e.grid.isLoading = true;
    const data = await firstValueFrom(this.northwindAPIIGService.getOrderDtoList((e.parentRowData as CustomerDto)?.customerId ?? undefined));
    if (data != null) {
      e.grid.data = data;
      e.grid.isLoading = false;
    }
  }

  public async gridCreatedOrderDetailDto(e: IGridCreatedEventArgs): Promise<void> {
    e.grid.isLoading = true;
    const data = await firstValueFrom(this.northwindAPIIGService.getOrderDetailDtoList((e.parentRowData as OrderDtoNorthwindAPIIG)?.orderId ?? 0));
    if (data != null) {
      e.grid.data = data;
      e.grid.isLoading = false;
    }
  }
}
