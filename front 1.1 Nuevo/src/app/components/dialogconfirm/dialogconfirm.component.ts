import { AfterViewInit, Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as JssonToXml from 'js2xmlparser'
import { IVRS } from 'src/app/interface/ivr';
import { ConfirmService } from 'src/app/servicios/confirm.service';



@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.css']
})
export class DialogconfirmComponent implements AfterViewInit{
  constructor(
    public dialogRef: MatDialogRef<DialogconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private service:ConfirmService, 
   ) {
  }
  
  emptyIVRS: IVRS = {
    mensajesBienvenida: [],
    audios: [],
    textos: [],
    tiemposEspera: [],
    transferenciasLlamada: []
  };
  ngAfterViewInit(): void {
    console.log(this.service.getivr())
   this.emptyIVRS= this.service.getivr()
   console.log( this.emptyIVRS)
  }

  close(){
    this.dialogRef.close(true)
  }

  

  onUpload( ){

    const xmlSelectedElements = JssonToXml.parse('elements', { element: this.emptyIVRS});
   let element = document.createElement('a');
      element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(xmlSelectedElements));
      element.setAttribute('download', 'ivr');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

}
