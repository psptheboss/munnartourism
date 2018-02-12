import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip007Component } from './trip007.component';

describe('Trip007Component', () => {
  let component: Trip007Component;
  let fixture: ComponentFixture<Trip007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
