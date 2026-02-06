import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxAvatarComponent, IgxDropDownItemComponent, IgxIconButtonDirective, IgxIconComponent, IgxToggleActionDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDto } from '../models/northwind-apiig/employee-dto';
import { NorthwindAPIIGService } from '../services/northwind-apiig.service';

@Component({
  selector: 'app-grid-with-templates',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxDropDownItemComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './grid-with-templates.component.html',
  styleUrls: ['./grid-with-templates.component.scss']
})
export class GridWithTemplatesComponent implements OnInit, OnDestroy {
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
}
