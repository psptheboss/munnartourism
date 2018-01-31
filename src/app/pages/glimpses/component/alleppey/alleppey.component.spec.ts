import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleppeyComponent } from './alleppey.component';

describe('AlleppeyComponent', () => {
  let component: AlleppeyComponent;
  let fixture: ComponentFixture<AlleppeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleppeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleppeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
