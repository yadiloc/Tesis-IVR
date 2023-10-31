
import { Component, OnInit } from '@angular/core';
import { IvrService } from 'src/app/services/ivr.service';
import { MatDialog } from '@angular/material/dialog';
import { ElimDiagComponent } from './elim-diag/elim-diag.component';
import { ModfDiagComponent } from './modf-diag/modf-diag.component';
import { Ivrs } from 'src/app/models/ivr.model';


@Component({
  selector: 'app-tablaivr',
  templateUrl: './tablaivr.component.html',
  styleUrls: ['./tablaivr.component.css'],
  // standalone: true,
  // imports: [MatTableModule],
})

export class TablaivrComponent implements OnInit {

  lisIvr!: Ivrs[];

  constructor(private ivrService: IvrService, private dialog: MatDialog){

  }
  displayedColumns: string[] = ['id','nombre', 'numeroAsociado','fecha', 'acciones'];


  ngOnInit(): void {
    this.listarIvr();
  }

  listarIvr(): void{
   
   this.ivrService.getList().subscribe( element => {
    this.lisIvr = element;
    console.log(this.lisIvr);

  })
}


 openDialog(id:number){
  const dialogRef= this.dialog.open(ElimDiagComponent,{
    data:{id:id}

  });
  dialogRef.componentInstance.tablaIvr.subscribe(()=>{
    this.listarIvr();
  })

 }

  modificarIvr() {
    const dialogRef = this.dialog.open(ModfDiagComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
 }

}