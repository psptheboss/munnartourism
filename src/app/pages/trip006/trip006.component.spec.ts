import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trip006Component } from './trip006.component';

describe('Trip006Component', () => {
  let component: Trip006Component;
  let fixture: ComponentFixture<Trip006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trip006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trip006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
