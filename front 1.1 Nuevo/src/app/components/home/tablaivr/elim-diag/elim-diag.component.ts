import { Component, Inject, Output,EventEmitter} from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IvrService } from 'src/app/services/ivr.service';


@Component({
  selector: 'app-elim-diag',
  templateUrl: './elim-diag.component.html',
  styleUrls: ['./elim-diag.component.css'],
  providers:[]
})
export class ElimDiagComponent {
  @Output() tablaIvr= new EventEmitter();
  
  


  constructor(public dialogRef: MatDialogRef<ElimDiagComponent> , private deleteService:IvrService, @Inject(MAT_DIALOG_DATA) public data:{id:number}){ }

     eliminarObjeto(){
      const id= this.data.id
      this.deleteService.delete(id).subscribe(()=>{
      this.tablaIvr.emit();
      this.dialogRef.close();
     
      });
     }  

  close():void{
    this.dialogRef.close();

     
  }
    
  }


