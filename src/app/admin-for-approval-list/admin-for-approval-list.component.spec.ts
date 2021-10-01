import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForApprovalListComponent } from './admin-for-approval-list.component';

describe('AdminForApprovalListComponent', () => {
  let component: AdminForApprovalListComponent;
  let fixture: ComponentFixture<AdminForApprovalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminForApprovalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
