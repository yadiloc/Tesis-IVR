import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimDiagComponent } from './elim-diag.component';

describe('ElimDiagComponent', () => {
  let component: ElimDiagComponent;
  let fixture: ComponentFixture<ElimDiagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElimDiagComponent]
    });
    fixture = TestBed.createComponent(ElimDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
