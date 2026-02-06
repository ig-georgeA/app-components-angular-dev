import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BANNER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxDropDownItemComponent, IgxIconButtonDirective, IgxIconComponent, IgxSnackbarComponent, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-dialogs-and-dropdowns',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxDropDownItemComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './dialogs-and-dropdowns.component.html',
  styleUrls: ['./dialogs-and-dropdowns.component.scss']
})
export class DialogsAndDropdownsComponent {
  public value?: string;
  public value1?: string;
}
