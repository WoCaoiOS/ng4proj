import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryIncomeComponent } from './query-income.component';

describe('QueryIncomeComponent', () => {
  let component: QueryIncomeComponent;
  let fixture: ComponentFixture<QueryIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
