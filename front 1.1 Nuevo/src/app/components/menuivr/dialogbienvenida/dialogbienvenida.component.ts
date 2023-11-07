import { Component, ElementRef, Inject } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import { Audios } from 'src/app/models/audio';
import { Bienvenida } from 'src/app/models/bienvenida';
import { Texto } from 'src/app/models/texto';
@Component({
  selector: 'app-dialogbienvenida',
  templateUrl:'./dialogbienvenida.component.html',
  styleUrls: ['./dialogbienvenida.component.css']
})
export class DialogbienvenidaComponent {
  myControl = new FormControl('');
  activo:boolean=true;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  variablenula:boolean=false;
  audio = new Audio();
  controlaudio:boolean=true;
   fileInput: ElementRef<HTMLInputElement> | undefined;
   selectedFile: File | undefined;
  constructor(
    public dialogRef: MatDialogRef<DialogbienvenidaComponent>,
    @Inject(MAT_DIALOG_DATA) public bienvenida:Bienvenida
  ) {
  }
  // ngOnInit() {
  //   console.log(this.data.texto,this.data.dataaudio)
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

    close(){
      this.stopAudio();
      this.dialogRef.close(true)
    }

    mess: string = ""
    musica!: File
    activar(){
      if(this.bienvenida.mess!==undefined && this.bienvenida.musica === undefined){
      this.activo=!this.activo
      }
      else if(this.bienvenida.mess ===undefined && this.bienvenida.musica!== undefined){
      this.activo=!this.activo
      }
      else{
        this.activo=true
      }
      }
  
    onFileSelected(event: Event) {
      this.activar()
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
