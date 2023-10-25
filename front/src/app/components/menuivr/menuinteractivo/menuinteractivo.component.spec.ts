import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuinteractivoComponent } from './menuinteractivo.component';

describe('MenuinteractivoComponent', () => {
  let component: MenuinteractivoComponent;
  let fixture: ComponentFixture<MenuinteractivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuinteractivoComponent]
    });
    fixture = TestBed.createComponent(MenuinteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
