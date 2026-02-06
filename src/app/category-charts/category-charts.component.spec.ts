import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { CategoryChartsComponent } from './category-charts.component';

describe('CategoryChartsComponent', () => {
  let component: CategoryChartsComponent;
  let fixture: ComponentFixture<CategoryChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryChartsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxCategoryChartModule, IgxPieChartModule],
      teardown: { destroyAfterEach: false }
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
