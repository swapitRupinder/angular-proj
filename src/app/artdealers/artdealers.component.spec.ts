import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtdealersComponent } from './artdealers.component';

describe('ArtdealersComponent', () => {
  let component: ArtdealersComponent;
  let fixture: ComponentFixture<ArtdealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtdealersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtdealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
