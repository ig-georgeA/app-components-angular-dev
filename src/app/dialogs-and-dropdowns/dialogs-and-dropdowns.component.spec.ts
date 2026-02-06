import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IgxDropDownItemComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxIconButtonDirective, IgxSnackbarComponent } from 'igniteui-angular';
import { DialogsAndDropdownsComponent } from './dialogs-and-dropdowns.component';

describe('DialogsAndDropdownsComponent', () => {
  let component: DialogsAndDropdownsComponent;
  let fixture: ComponentFixture<DialogsAndDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogsAndDropdownsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_BANNER_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IgxDropDownItemComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxIconButtonDirective, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsAndDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
