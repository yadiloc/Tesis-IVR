import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogtexto',
  templateUrl: './dialogtexto.component.html',
  styleUrls: ['./dialogtexto.component.css']
})
export class DialogtextoComponent {
  constructor(public dialogRef:MatDialogRef<DialogtextoComponent>){}
    
  close(){
    this.dialogRef.close("la vida es triste")
  }
  aceptar(){
   
  }
  
  

}
