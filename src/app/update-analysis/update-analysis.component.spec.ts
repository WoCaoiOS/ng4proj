import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnalysisComponent } from './update-analysis.component';

describe('UpdateAnalysisComponent', () => {
  let component: UpdateAnalysisComponent;
  let fixture: ComponentFixture<UpdateAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
