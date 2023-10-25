import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuivrComponent } from './menuivr.component';

describe('MenuivrComponent', () => {
  let component: MenuivrComponent;
  let fixture: ComponentFixture<MenuivrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuivrComponent]
    });
    fixture = TestBed.createComponent(MenuivrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
