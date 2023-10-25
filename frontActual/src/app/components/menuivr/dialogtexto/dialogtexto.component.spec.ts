import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogtextoComponent } from './dialogtexto.component';

describe('DialogtextoComponent', () => {
  let component: DialogtextoComponent;
  let fixture: ComponentFixture<DialogtextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogtextoComponent]
    });
    fixture = TestBed.createComponent(DialogtextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
