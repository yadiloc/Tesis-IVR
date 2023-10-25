import { Component, ElementRef, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-conf-audio',
  templateUrl: './conf-audio.component.html',
  styleUrls: ['./conf-audio.component.css']
})
export class ConfAudioComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  audio = new Audio();
  variablenula: boolean = false;
  controlaudio: boolean = true;
  fileInput: ElementRef<HTMLInputElement> | undefined;
  selectedFile: File | undefined;
  revisor: boolean=true;
  constructor(
    public dialogRef: MatDialogRef<ConfAudioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }
  close() {
    this.stop();
    this.dialogRef.close(true);
  }
  ngOnInit() {
  
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
 

  onFileSelected(event: Event) {
    console.log(this.controlaudio)
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
      this.variablenula = true;
    }
  }

  play() {
    this.controlaudio = !this.controlaudio;
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
  stop() {
    this.controlaudio = !this.controlaudio;
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = undefined!;
    }
  }
}
