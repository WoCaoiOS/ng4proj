import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedStatisticsComponent } from './red-statistics.component';

describe('RedStatisticsComponent', () => {
  let component: RedStatisticsComponent;
  let fixture: ComponentFixture<RedStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
