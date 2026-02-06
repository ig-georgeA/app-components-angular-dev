import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TREE_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { NestedDataType } from '../models/nested-data-repeat/nested-data-type';
import { NestedDataRepeatService } from '../services/nested-data-repeat.service';

@Component({
  selector: 'app-expansion-panels-tree',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TREE_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxCheckboxComponent, FormsModule],
  templateUrl: './expansion-panels-tree.component.html',
  styleUrls: ['./expansion-panels-tree.component.scss']
})
export class ExpansionPanelsTreeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listSelectedItem4?: string;
  public value?: string;
  public value1?: string;
  public checked = false;
  public nestedDataRepeatNestedData?: NestedDataType;

  constructor(
    public nestedDataRepeatService: NestedDataRepeatService,
  ) {}


  ngOnInit() {
    this.nestedDataRepeatService.getNestedData().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.nestedDataRepeatNestedData = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
