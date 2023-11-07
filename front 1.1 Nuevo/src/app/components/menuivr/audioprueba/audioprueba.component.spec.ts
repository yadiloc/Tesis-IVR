import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiopruebaComponent } from './audioprueba.component';

describe('AudiopruebaComponent', () => {
  let component: AudiopruebaComponent;
  let fixture: ComponentFixture<AudiopruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiopruebaComponent]
    });
    fixture = TestBed.createComponent(AudiopruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
