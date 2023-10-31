import { Component } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modf-diag',
  templateUrl: './modf-diag.component.html',
  styleUrls: ['./modf-diag.component.css']
})
export class ModfDiagComponent {

  constructor(public dialogRef: MatDialogRef<ModfDiagComponent>){

  }
}
