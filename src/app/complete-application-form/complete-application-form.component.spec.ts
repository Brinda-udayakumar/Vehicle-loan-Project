import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteApplicationFormComponent } from './complete-application-form.component';

describe('CompleteApplicationFormComponent', () => {
  let component: CompleteApplicationFormComponent;
  let fixture: ComponentFixture<CompleteApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
