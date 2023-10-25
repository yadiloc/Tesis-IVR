import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ivr } from '../menuivr.component';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
 audio = new Audio();
 variablenula:boolean=false;
 controlaudio:boolean=true;
  fileInput: ElementRef<HTMLInputElement> | undefined;
 
  selectedFile: File | undefined;
  constructor(
    public dialogRef: MatDialogRef<AudioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  close() {
    this.stopAudio();
    this.dialogRef.close();
  }
  onFileSelected(event: Event) {
    console.log(this.controlaudio)
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
      this.variablenula=true;
    }
  }

  playAudio() {
    this.controlaudio=!this.controlaudio;
    console.log(this.controlaudio)
    if (this.selectedFile) {
      
      this.audio = new Audio();
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.audio.src = e.target.result;
        this.audio.load();
        this.audio.play();
        this.audio.onended = () => {
          this.audio = undefined!;
        };
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  stopAudio() {
    this.controlaudio=!this.controlaudio;
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = undefined!;
    }
  }

  }
  
  

