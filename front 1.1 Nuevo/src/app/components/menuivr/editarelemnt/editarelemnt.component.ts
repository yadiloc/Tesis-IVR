import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Texto } from 'src/app/models/texto';

@Component({
  selector: 'app-editarelemnt',
  templateUrl: './editarelemnt.component.html',
  styleUrls: ['./editarelemnt.component.css']
})
export class EditarelemntComponent {
  habilitar: boolean=true;

  constructor(
    public dialogRef: MatDialogRef<EditarelemntComponent>,
    @Inject (MAT_DIALOG_DATA) public textomensaje: Texto,
  ) {
    
  }

  contenido:string="";
  activar(){
    if(this.textomensaje!==undefined){ 
      this.habilitar=!this.habilitar
    }
    else{
        this.habilitar=true
    }
    }
  
    close(){
      this.dialogRef.close(true)
    }
   


}
