import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IGX_ACTION_STRIP_DIRECTIVES, IGX_TREE_GRID_DIRECTIVES } from 'igniteui-angular';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiig/employee-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-tree-grid',
  imports: [IGX_ACTION_STRIP_DIRECTIVES, IGX_TREE_GRID_DIRECTIVES],
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
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

  public async rowEditDoneTreeGrid(e: IGridEditDoneEventArgs): Promise<void> {
    if(e.isAddRow == false) {
      await firstValueFrom(this.northwindAPIIGService.putEmployeeDto((e.rowData as EmployeeDto)?.employeeId ?? 0, e.rowData as EmployeeDto));
    }
  }
}
