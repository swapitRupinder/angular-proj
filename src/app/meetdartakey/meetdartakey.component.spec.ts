import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetdartakeyComponent } from './meetdartakey.component';

describe('MeetdartakeyComponent', () => {
  let component: MeetdartakeyComponent;
  let fixture: ComponentFixture<MeetdartakeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetdartakeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetdartakeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
