import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  constructor(public dialogRef:MatDialogRef<TransferenciaComponent>){}
    
  close(){
    this.dialogRef.close()
  }
  aceptar(){
    
  }
  

}
