import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipinnerComponent } from './membershipinner.component';

describe('MembershipinnerComponent', () => {
  let component: MembershipinnerComponent;
  let fixture: ComponentFixture<MembershipinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
