import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyContractComponent } from './apply-contract.component';

describe('ApplyContractComponent', () => {
  let component: ApplyContractComponent;
  let fixture: ComponentFixture<ApplyContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
