import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmloyeesComponent } from './epmloyees.component';

describe('EpmloyeesComponent', () => {
  let component: EpmloyeesComponent;
  let fixture: ComponentFixture<EpmloyeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpmloyeesComponent]
    });
    fixture = TestBed.createComponent(EpmloyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
