import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxDateTimeEditorDirective, IGX_DATE_PICKER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IgxAvatarComponent, IGX_SLIDER_DIRECTIVES, IgcFormsModule, IgxButtonDirective, IgxIconButtonDirective, IgxBadgeComponent, IGX_BUTTON_GROUP_DIRECTIVES, IgxSwitchComponent, IgxCheckboxComponent, IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular';
import { InputsComponent } from './inputs.component';

describe('InputsComponent', () => {
  let component: InputsComponent;
  let fixture: ComponentFixture<InputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxDateTimeEditorDirective, IGX_DATE_PICKER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IgxAvatarComponent, IGX_SLIDER_DIRECTIVES, IgcFormsModule, IgxButtonDirective, IgxIconButtonDirective, IgxBadgeComponent, IGX_BUTTON_GROUP_DIRECTIVES, IgxSwitchComponent, IgxCheckboxComponent, IgxRadioComponent, IgxRadioGroupDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
