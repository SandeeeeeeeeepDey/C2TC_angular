import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHumanComponent } from './super-human.component';

describe('SuperHumanComponent', () => {
  let component: SuperHumanComponent;
  let fixture: ComponentFixture<SuperHumanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHumanComponent]
    });
    fixture = TestBed.createComponent(SuperHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
