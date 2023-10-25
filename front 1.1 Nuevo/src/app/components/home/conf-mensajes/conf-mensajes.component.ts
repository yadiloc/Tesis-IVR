import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conf-mensajes',
  templateUrl: './conf-mensajes.component.html',
  styleUrls: ['./conf-mensajes.component.css']
})
export class ConfMensajesComponent {
  filteredOptions: Observable<string[]> | undefined;
  habilitar: boolean=true;
  constructor(
    public dialogRef: MatDialogRef<ConfMensajesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {
  }
  close(){
    this.dialogRef.close()
  }
 // activar(){
   // if(this.data.texto!==undefined){
  //  this.habilitar=!this.habilitar
  //  }
   // else{
  //      this.habilitar=true
   // }
  //  }

}
