import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogtextoComponent } from '../dialogtexto/dialogtexto.component';

@Component({
  selector: 'app-tiempoespera',
  templateUrl: './tiempoespera.component.html',
  styleUrls: ['./tiempoespera.component.css']
})
export class TiempoesperaComponent {
  constructor(public dialogRef:MatDialogRef<DialogtextoComponent>){}
    
  close(){
    this.dialogRef.close()
  }
  aceptar(){
    
  }
  
  

}
