import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip012Component } from './trip012.component';

describe('Trip012Component', () => {
  let component: Trip012Component;
  let fixture: ComponentFixture<Trip012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
