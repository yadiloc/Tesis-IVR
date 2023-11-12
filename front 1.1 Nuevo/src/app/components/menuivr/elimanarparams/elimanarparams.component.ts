import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-elimanarparams',
  templateUrl: './elimanarparams.component.html',
  styleUrls: ['./elimanarparams.component.css']
})
export class ElimanarparamsComponent {

  constructor(
    public dialogRef: MatDialogRef<ElimanarparamsComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
    
  }

}
