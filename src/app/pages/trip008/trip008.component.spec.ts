import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip008Component } from './trip008.component';

describe('Trip008Component', () => {
  let component: Trip008Component;
  let fixture: ComponentFixture<Trip008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
