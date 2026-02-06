import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescalePalettesComponent } from './typescale-palettes.component';

describe('TypescalePalettesComponent', () => {
  let component: TypescalePalettesComponent;
  let fixture: ComponentFixture<TypescalePalettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescalePalettesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescalePalettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
