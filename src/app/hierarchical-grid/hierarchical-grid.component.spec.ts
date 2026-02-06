import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_HIERARCHICAL_GRID_DIRECTIVES } from 'igniteui-angular';
import { HierarchicalGridComponent } from './hierarchical-grid.component';

describe('HierarchicalGridComponent', () => {
  let component: HierarchicalGridComponent;
  let fixture: ComponentFixture<HierarchicalGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchicalGridComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_HIERARCHICAL_GRID_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
