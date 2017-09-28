import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeIncomeComponent } from './authorize-income.component';

describe('AuthorizeIncomeComponent', () => {
  let component: AuthorizeIncomeComponent;
  let fixture: ComponentFixture<AuthorizeIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
