import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogconfirmComponent } from './dialogconfirm.component';

describe('DialogconfirmComponent', () => {
  let component: DialogconfirmComponent;
  let fixture: ComponentFixture<DialogconfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogconfirmComponent]
    });
    fixture = TestBed.createComponent(DialogconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
