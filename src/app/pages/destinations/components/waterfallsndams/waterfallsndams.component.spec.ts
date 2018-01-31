import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallsndamsComponent } from './waterfallsndams.component';

describe('WaterfallsndamsComponent', () => {
  let component: WaterfallsndamsComponent;
  let fixture: ComponentFixture<WaterfallsndamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterfallsndamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallsndamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
