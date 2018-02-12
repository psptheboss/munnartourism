import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip011Component } from './trip011.component';

describe('Trip011Component', () => {
  let component: Trip011Component;
  let fixture: ComponentFixture<Trip011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
