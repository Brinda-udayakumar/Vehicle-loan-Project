import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonaldetailsComponent } from './user-personaldetails.component';

describe('UserPersonaldetailsComponent', () => {
  let component: UserPersonaldetailsComponent;
  let fixture: ComponentFixture<UserPersonaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPersonaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
