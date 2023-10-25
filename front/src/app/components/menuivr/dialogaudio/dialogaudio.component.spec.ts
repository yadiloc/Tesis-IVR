import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaudioComponent } from './dialogaudio.component';

describe('DialogaudioComponent', () => {
  let component: DialogaudioComponent;
  let fixture: ComponentFixture<DialogaudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogaudioComponent]
    });
    fixture = TestBed.createComponent(DialogaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
