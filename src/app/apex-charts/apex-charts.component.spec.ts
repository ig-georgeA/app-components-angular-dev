import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApexChartsComponent } from './apex-charts.component';

describe('ApexChartsComponent', () => {
  let component: ApexChartsComponent;
  let fixture: ComponentFixture<ApexChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexChartsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
