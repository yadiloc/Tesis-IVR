import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfAudioComponent } from './conf-audio.component';

describe('ConfAudioComponent', () => {
  let component: ConfAudioComponent;
  let fixture: ComponentFixture<ConfAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfAudioComponent]
    });
    fixture = TestBed.createComponent(ConfAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
