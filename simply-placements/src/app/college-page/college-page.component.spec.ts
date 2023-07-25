import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegePageComponent } from './college-page.component';

describe('CollegePageComponent', () => {
  let component: CollegePageComponent;
  let fixture: ComponentFixture<CollegePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegePageComponent]
    });
    fixture = TestBed.createComponent(CollegePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
