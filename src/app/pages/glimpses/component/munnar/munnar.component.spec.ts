import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunnarComponent } from './munnar.component';

describe('MunnarComponent', () => {
  let component: MunnarComponent;
  let fixture: ComponentFixture<MunnarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunnarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
