import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyGroundingComponent } from './apply-grounding.component';

describe('ApplyGroundingComponent', () => {
  let component: ApplyGroundingComponent;
  let fixture: ComponentFixture<ApplyGroundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyGroundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyGroundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
