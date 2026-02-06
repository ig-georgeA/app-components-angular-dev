import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IGX_TREE_DIRECTIVES } from 'igniteui-angular';
import { ExpansionPanelsTreeComponent } from './expansion-panels-tree.component';

describe('ExpansionPanelsTreeComponent', () => {
  let component: ExpansionPanelsTreeComponent;
  let fixture: ComponentFixture<ExpansionPanelsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelsTreeComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IGX_TREE_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
