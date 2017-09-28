import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftoversDetailComponent } from './leftovers-detail.component';

describe('LeftoversDetailComponent', () => {
  let component: LeftoversDetailComponent;
  let fixture: ComponentFixture<LeftoversDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftoversDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftoversDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
