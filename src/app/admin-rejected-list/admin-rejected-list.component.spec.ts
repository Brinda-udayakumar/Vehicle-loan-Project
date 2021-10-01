import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectedListComponent } from './admin-rejected-list.component';

describe('AdminRejectedListComponent', () => {
  let component: AdminRejectedListComponent;
  let fixture: ComponentFixture<AdminRejectedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRejectedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRejectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
