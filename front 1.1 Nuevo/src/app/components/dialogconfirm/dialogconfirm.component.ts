import {  Component,Output,EventEmitter, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IvrService } from 'src/app/services/ivr.service';
import { Ivrs } from 'src/app/models/ivr.model';



@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.css']
})
export class DialogconfirmComponent {
  @Output() tabla = new EventEmitter();
  nombre = "";
  numero = "";

  arreglo!: any[];
  constructor(
    public dialogRef: MatDialogRef<DialogconfirmComponent>,private ivrService:IvrService
   ) {
  }  

  close(){
    this.dialogRef.close(true)
  }

  guardarIvr(){
    let ivr = new Ivrs(this.nombre, this.numero);
    this.ivrService.post(ivr).subscribe();
    this.tabla.emit();
  }

 
}
