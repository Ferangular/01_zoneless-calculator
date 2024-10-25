import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBtnComponent } from './calculator-btn.component';

describe('CalculatorBtnComponent', () => {
  let component: CalculatorBtnComponent;
  let fixture: ComponentFixture<CalculatorBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
