import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip010Component } from './trip010.component';

describe('Trip010Component', () => {
  let component: Trip010Component;
  let fixture: ComponentFixture<Trip010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
