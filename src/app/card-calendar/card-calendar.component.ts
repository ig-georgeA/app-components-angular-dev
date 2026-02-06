import { Component } from '@angular/core';
import { IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-card-calendar',
  imports: [IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxDividerDirective],
  templateUrl: './card-calendar.component.html',
  styleUrls: ['./card-calendar.component.scss']
})
export class CardCalendarComponent {
  public date: Date = new Date('2022-01-13T00:00');
}
