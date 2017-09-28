import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickStatisticsComponent } from './click-statistics.component';

describe('ClickStatisticsComponent', () => {
  let component: ClickStatisticsComponent;
  let fixture: ComponentFixture<ClickStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
