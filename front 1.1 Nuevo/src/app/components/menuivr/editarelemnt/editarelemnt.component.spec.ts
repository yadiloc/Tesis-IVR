import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarelemntComponent } from './editarelemnt.component';

describe('EditarelemntComponent', () => {
  let component: EditarelemntComponent;
  let fixture: ComponentFixture<EditarelemntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarelemntComponent]
    });
    fixture = TestBed.createComponent(EditarelemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
