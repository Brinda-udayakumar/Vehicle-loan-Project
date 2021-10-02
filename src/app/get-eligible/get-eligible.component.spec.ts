import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEligibleComponent } from './get-eligible.component';

describe('GetEligibleComponent', () => {
  let component: GetEligibleComponent;
  let fixture: ComponentFixture<GetEligibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEligibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
