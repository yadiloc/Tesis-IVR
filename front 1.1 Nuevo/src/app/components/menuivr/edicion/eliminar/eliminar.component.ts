import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>
   ) {
  }  



  eliminar(tipo:string, id:number){

  }
}
