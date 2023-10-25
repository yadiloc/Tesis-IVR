import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfMensajesComponent } from './conf-mensajes.component';

describe('ConfMensajesComponent', () => {
  let component: ConfMensajesComponent;
  let fixture: ComponentFixture<ConfMensajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfMensajesComponent]
    });
    fixture = TestBed.createComponent(ConfMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
