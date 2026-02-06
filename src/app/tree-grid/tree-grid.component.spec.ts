import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_TREE_GRID_DIRECTIVES, IGX_ACTION_STRIP_DIRECTIVES } from 'igniteui-angular';
import { TreeGridComponent } from './tree-grid.component';

describe('TreeGridComponent', () => {
  let component: TreeGridComponent;
  let fixture: ComponentFixture<TreeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeGridComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_TREE_GRID_DIRECTIVES, IGX_ACTION_STRIP_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
