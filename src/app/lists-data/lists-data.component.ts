import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiig/employee-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-lists-data',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxAvatarComponent, IgxIconComponent, RouterLink],
  templateUrl: './lists-data.component.html',
  styleUrls: ['./lists-data.component.scss']
})
export class ListsDataComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listSelectedItem?: string;
  public listSelectedItem1?: string;
  public listSelectedItem2?: EmployeeDto;
  public listSelectedItem3?: EmployeeDto;
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

  public clickListItem(item: EmployeeDto): void {
    this.listSelectedItem1 = '1';
    this.listSelectedItem2 = item;
  }
}
