import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarivrComponent } from './guardarivr.component';

describe('GuardarivrComponent', () => {
  let component: GuardarivrComponent;
  let fixture: ComponentFixture<GuardarivrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarivrComponent]
    });
    fixture = TestBed.createComponent(GuardarivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
