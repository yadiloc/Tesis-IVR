import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimanarparamsComponent } from './elimanarparams.component';

describe('ElimanarparamsComponent', () => {
  let component: ElimanarparamsComponent;
  let fixture: ComponentFixture<ElimanarparamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElimanarparamsComponent]
    });
    fixture = TestBed.createComponent(ElimanarparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
