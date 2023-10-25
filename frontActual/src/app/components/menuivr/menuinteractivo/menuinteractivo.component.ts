import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menuinteractivo',
  templateUrl: './menuinteractivo.component.html',
  styleUrls: ['./menuinteractivo.component.css']
})
export class MenuinteractivoComponent {
  constructor(public dialogRef:MatDialogRef<MenuinteractivoComponent>){}
    
  close(){
    this.dialogRef.close()
  }
  aceptar(){
    
  }
  
  

}
