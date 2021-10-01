import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanDetailsComponent } from './show-loan-details.component';

describe('ShowLoanDetailsComponent', () => {
  let component: ShowLoanDetailsComponent;
  let fixture: ComponentFixture<ShowLoanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
