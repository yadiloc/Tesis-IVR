import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaivrComponent } from './tablaivr.component';

describe('TablaivrComponent', () => {
  let component: TablaivrComponent;
  let fixture: ComponentFixture<TablaivrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaivrComponent]
    });
    fixture = TestBed.createComponent(TablaivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
