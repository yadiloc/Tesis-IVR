import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoesperaComponent } from './tiempoespera.component';

describe('TiempoesperaComponent', () => {
  let component: TiempoesperaComponent;
  let fixture: ComponentFixture<TiempoesperaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiempoesperaComponent]
    });
    fixture = TestBed.createComponent(TiempoesperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
