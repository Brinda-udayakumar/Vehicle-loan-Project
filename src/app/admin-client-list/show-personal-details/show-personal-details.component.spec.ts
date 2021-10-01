import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonalDetailsComponent } from './show-personal-details.component';

describe('ShowPersonalDetailsComponent', () => {
  let component: ShowPersonalDetailsComponent;
  let fixture: ComponentFixture<ShowPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPersonalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
