import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accomandation } from './accomandation.component';

describe('Accomandation', () => {
  let component: Accomandation;
  let fixture: ComponentFixture<Accomandation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accomandation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accomandation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
