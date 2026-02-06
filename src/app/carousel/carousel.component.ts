import { Component } from '@angular/core';
import { IGX_CAROUSEL_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-carousel',
  imports: [IGX_CAROUSEL_DIRECTIVES, IgxButtonDirective],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {}
