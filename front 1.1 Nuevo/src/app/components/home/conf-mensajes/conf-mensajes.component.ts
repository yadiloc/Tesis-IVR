import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Texto } from 'src/app/models/texto';
import { TextoService } from 'src/app/services/texto.service';


@Component({
  selector: 'app-conf-mensajes',
  templateUrl: './conf-mensajes.component.html',
  styleUrls: ['./conf-mensajes.component.css']
})
export class ConfMensajesComponent {
  filteredOptions: Observable<string[]> | undefined;
  habilitar: boolean = true;

  mensaje: string = ""; 

  constructor(private textoService: TextoService, public dialogRef: MatDialogRef<ConfMensajesComponent>,) { }
  close() {
    this.dialogRef.close()
  }

  enviarMensaje() {
    this.textoService.enviarTexto(this.mensaje).subscribe(() => {
      this.dialogRef.close();
    })
  }
}
