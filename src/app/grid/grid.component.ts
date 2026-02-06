import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IGX_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxPaginatorComponent, IRowDataEventArgs } from 'igniteui-angular';
import { firstValueFrom, Subject, take, takeUntil } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { CustomerDtoPagedResultDto } from '../models/northwind-apiig/customer-dto-paged-result-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-grid',
  imports: [IGX_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxPaginatorComponent],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _test = 'abc';
  @Input()
  public get test(): string {
    return this._test ?? 'abc';
  }
  public set test(value: string) {
    this._test = value;
  }

  private _basic_grid_1_Page_Size = 15;
  public get basic_grid_1_Page_Size(): number {
    return this._basic_grid_1_Page_Size;
  }
  public set basic_grid_1_Page_Size(value: number) {
    this._basic_grid_1_Page_Size = value;
    this.basicGrid1_Data_Request$.next();
  }

  private _basic_grid_1_Page_Index = 0;
  public get basic_grid_1_Page_Index(): number {
    return this._basic_grid_1_Page_Index;
  }
  public set basic_grid_1_Page_Index(value: number) {
    this._basic_grid_1_Page_Index = value;
    this.basicGrid1_Data_Request$.next();
  }
  public basicGrid1_Data_Request?: CustomerDtoPagedResultDto;
  public basicGrid1_Data_Request$: Subject<void> = new Subject<void>();

  constructor(
    public northwindAPIIGService: NorthwindAPIIGService,
  ) {
    this.basic_grid_1_Page_Size = 15;
    this.basic_grid_1_Page_Index = 0;
  }


  ngOnInit() {
    this.northwindAPIIGService.getCustomerDtoPagedResultDto(this.basic_grid_1_Page_Index, this.basic_grid_1_Page_Size).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.basicGrid1_Data_Request = data
    );
    this.basicGrid1_Data_Request$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.northwindAPIIGService.getCustomerDtoPagedResultDto(this.basic_grid_1_Page_Index, this.basic_grid_1_Page_Size).pipe(take(1)).subscribe(
        data => this.basicGrid1_Data_Request = data
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.basicGrid1_Data_Request$.complete();
  }

  public async rowEditDoneBasicGrid1(e: IGridEditDoneEventArgs): Promise<void> {
    if(e.isAddRow == false) {
      await firstValueFrom(this.northwindAPIIGService.postCustomerDto(e.rowData as CustomerDto));
    }
  }

  public async rowAddedBasicGrid1(e: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this.northwindAPIIGService.postCustomerDto(e.rowData as CustomerDto));
  }

  public async rowDeletedBasicGrid1(e: IRowDataEventArgs): Promise<void> {
    await firstValueFrom(this.northwindAPIIGService.deleteCustomerDto((e.rowData as CustomerDto)?.customerId ?? ''));
  }
}
