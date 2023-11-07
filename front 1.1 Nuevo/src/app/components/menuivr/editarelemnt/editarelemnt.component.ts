import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editarelemnt',
  templateUrl: './editarelemnt.component.html',
  styleUrls: ['./editarelemnt.component.css']
})
export class EditarelemntComponent {
  nuevoValor: any;

  constructor(
    public dialogRef: MatDialogRef<EditarelemntComponent>,
    @Inject (MAT_DIALOG_DATA) public elementoActual: any,
  ) {
    this.nuevoValor = { ...elementoActual }; // Inicializar el nuevo valor con una copia del elemento actual
  }

  guardarCambios(): void {
    this.dialogRef.close(this.nuevoValor);
   
  }

  cancelar(): void {
    this.dialogRef.close(null);
  }


}
