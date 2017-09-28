import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaltiesBillComponent } from './royalties-bill.component';

describe('RoyaltiesBillComponent', () => {
  let component: RoyaltiesBillComponent;
  let fixture: ComponentFixture<RoyaltiesBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyaltiesBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaltiesBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
