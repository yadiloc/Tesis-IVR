import { Component, ElementRef, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Ivr } from '../menuivr.component';
@Component({
  selector: 'app-dialogbienvenida',
  templateUrl:'./dialogbienvenida.component.html',
  styleUrls: ['./dialogbienvenida.component.css']
})
export class DialogbienvenidaComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  variablenula:boolean=false;
  audio = new Audio();
  controlaudio:boolean=true;
   fileInput: ElementRef<HTMLInputElement> | undefined;
  
   selectedFile: File | undefined;
  constructor(
    public dialogRef: MatDialogRef<DialogbienvenidaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

    close(){
      this.stopAudio();
      this.dialogRef.close("la vida es triste")
    }
  
    onFileSelected(event: Event) {
      console.log(this.controlaudio)
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        this.selectedFile = target.files[0];
        this.variablenula=!this.variablenula
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