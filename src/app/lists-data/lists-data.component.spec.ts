import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { ListsDataComponent } from './lists-data.component';

describe('ListsDataComponent', () => {
  let component: ListsDataComponent;
  let fixture: ComponentFixture<ListsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsDataComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
