import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksStatisticsComponent } from './works-statistics.component';

describe('WorksStatisticsComponent', () => {
  let component: WorksStatisticsComponent;
  let fixture: ComponentFixture<WorksStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
