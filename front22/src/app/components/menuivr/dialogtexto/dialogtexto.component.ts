import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ivr } from '../menuivr.component';

@Component({
  selector: 'app-dialogtexto',
  templateUrl: './dialogtexto.component.html',
  styleUrls: ['./dialogtexto.component.css']
})
export class DialogtextoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogtextoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Ivr,
  ) {}
  close(){
    this.dialogRef.close("la vida es triste")
  }
  aceptar(){
   
  }
  
  

}
