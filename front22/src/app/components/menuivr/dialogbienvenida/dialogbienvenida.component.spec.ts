import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbienvenidaComponent } from './dialogbienvenida.component';

describe('DialogbienvenidaComponent', () => {
  let component: DialogbienvenidaComponent;
  let fixture: ComponentFixture<DialogbienvenidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogbienvenidaComponent]
    });
    fixture = TestBed.createComponent(DialogbienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
