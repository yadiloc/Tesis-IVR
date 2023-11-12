import { Component, ElementRef, Inject } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import { Transferencia } from 'src/app/models/transferencia';
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  audio = new Audio();
  controlaudio:boolean=true;
  variablenula:boolean=false;
  fileInput: ElementRef<HTMLInputElement> | undefined;
  selectedFile: File | undefined;
  change: boolean=true;
  constructor(public  dialogRef: MatDialogRef<TransferenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public  numeroTransfer: Transferencia,
  ) {

  }
  // ngOnInit() {
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
  //Numero cell verificarlo


  numeroTelf!:string
  tiempoEspera!: number
  melodia !:File
  
  revisarEstado(){
    console.log("entro funcion");
       if( this. numeroTransfer. numeroTelf!== undefined &&  this. numeroTransfer. tiempoEspera!== undefined ){
        console.log("entro en if");
        this.change=!this.change
        console.log("cambio aqui");
    }
    else{
      this.change=true
    }
    }



  onFileSelected(event: Event) {
    this.revisarEstado()
    console.log("escojo audio");
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
