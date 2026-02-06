import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_COMBO_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES } from 'igniteui-angular';
import { PickersComboComponent } from './pickers-combo.component';

describe('PickersComboComponent', () => {
  let component: PickersComboComponent;
  let fixture: ComponentFixture<PickersComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickersComboComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_COMBO_DIRECTIVES, IGX_SIMPLE_COMBO_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickersComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
