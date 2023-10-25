import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfDiagComponent } from './modf-diag.component';

describe('ModfDiagComponent', () => {
  let component: ModfDiagComponent;
  let fixture: ComponentFixture<ModfDiagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModfDiagComponent]
    });
    fixture = TestBed.createComponent(ModfDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
