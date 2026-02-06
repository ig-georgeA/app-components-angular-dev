import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_GRID_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxIconButtonDirective, IGX_DROP_DOWN_DIRECTIVES, IgxDropDownItemComponent } from 'igniteui-angular';
import { GridWithTemplatesComponent } from './grid-with-templates.component';

describe('GridWithTemplatesComponent', () => {
  let component: GridWithTemplatesComponent;
  let fixture: ComponentFixture<GridWithTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridWithTemplatesComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxIconButtonDirective, IGX_DROP_DOWN_DIRECTIVES, IgxDropDownItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridWithTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
