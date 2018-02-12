import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip009Component } from './trip009.component';

describe('Trip009Component', () => {
  let component: Trip009Component;
  let fixture: ComponentFixture<Trip009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
