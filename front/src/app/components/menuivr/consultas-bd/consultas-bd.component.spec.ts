import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasBDComponent } from './consultas-bd.component';

describe('ConsultasBDComponent', () => {
  let component: ConsultasBDComponent;
  let fixture: ComponentFixture<ConsultasBDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasBDComponent]
    });
    fixture = TestBed.createComponent(ConsultasBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
