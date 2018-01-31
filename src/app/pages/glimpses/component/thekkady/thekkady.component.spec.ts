import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThekkadyComponent } from './thekkady.component';

describe('ThekkadyComponent', () => {
  let component: ThekkadyComponent;
  let fixture: ComponentFixture<ThekkadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThekkadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThekkadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
