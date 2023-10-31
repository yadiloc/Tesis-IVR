import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';





@Component({
  selector: 'app-conf-audio',
  templateUrl: './conf-audio.component.html',
  styleUrls: ['./conf-audio.component.css']
})

export class ConfAudioComponent {
  
  nombre: string = '';
  archivoSeleccionado: File | null = null;

  constructor(private dialogRef: MatDialogRef<ConfAudioComponent>) { }

  seleccionarArchivo(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarArchivo() {
    const datos = {
      audio: this.archivoSeleccionado,
      nombre: this.nombre,
  
    };
    this.dialogRef.close(datos);
  }
}
