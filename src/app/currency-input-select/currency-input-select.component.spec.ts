import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInputSelectComponent } from './currency-input-select.component';

describe('CurrencyInputSelectComponent', () => {
  let component: CurrencyInputSelectComponent;
  let fixture: ComponentFixture<CurrencyInputSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyInputSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
