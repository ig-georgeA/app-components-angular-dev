import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IgcFormsModule, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxCheckboxComponent, IgxDateTimeEditorDirective, IgxIconButtonDirective, IgxIconComponent, IgxRadioComponent, IgxRadioGroupDirective, IgxSwitchComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-inputs',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IgxDateTimeEditorDirective, IgxIconButtonDirective, IgxRadioGroupDirective, IgxIconComponent, IgxAvatarComponent, IgcFormsModule, IgxButtonDirective, IgxBadgeComponent, IgxSwitchComponent, IgxCheckboxComponent, IgxRadioComponent, FormsModule, RouterLink],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputsComponent {
  public radioGroupVar = 1;
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public date: Date = new Date('2021-03-01T00:00');
  public date1: Date = new Date('2021-03-27T00:00');
  public value4 = 50;
  public value5 = 25;
  public value6 = 50;
  public ngModel = 3;
  public ngModel1 = 3;
  public ngModel2 = 3;
  public value7?: string;
  public value8 = 'some content';
  public value9?: string;
  public value10?: string;
  public checked = true;
  public checked1 = true;
  public checked2 = true;
  public checked3 = true;
  public checked4 = true;
  public value11 = 'some content';


  public stringToDate(value: string): Date {
    return new Date(value);
  }
}
