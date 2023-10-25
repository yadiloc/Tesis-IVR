import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TablaivrComponent } from '../tablaivr.component';
import { IvrService } from 'src/app/services/ivr.service';
import { MatFormFieldControl} from '@angular/material/form-field';


@Component({
  selector: 'app-elim-diag',
  templateUrl: './elim-diag.component.html',
  styleUrls: ['./elim-diag.component.css']
})
export class ElimDiagComponent {
  @Input({
    required:true
  })
  id!:number;

  constructor(public dialogRef: MatDialogRef<ElimDiagComponent>, public ivrService: IvrService){

      }
      delete(){
        this.ivrService.delete(this.id).subscribe();
      }
  }


