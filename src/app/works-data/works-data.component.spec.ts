import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDataComponent } from './works-data.component';

describe('WorksDataComponent', () => {
  let component: WorksDataComponent;
  let fixture: ComponentFixture<WorksDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
