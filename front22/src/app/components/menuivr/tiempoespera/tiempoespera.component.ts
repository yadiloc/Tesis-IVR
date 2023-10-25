import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogtextoComponent } from '../dialogtexto/dialogtexto.component';
import { Ivr } from '../menuivr.component';

@Component({
  selector: 'app-tiempoespera',
  templateUrl: './tiempoespera.component.html',
  styleUrls: ['./tiempoespera.component.css']
})
export class TiempoesperaComponent {
  constructor(
    public dialogRef: MatDialogRef<TiempoesperaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Ivr,
  ) {}
    
  close(){
    this.dialogRef.close()
  }
  aceptar(){
    
  }
  
  

}
