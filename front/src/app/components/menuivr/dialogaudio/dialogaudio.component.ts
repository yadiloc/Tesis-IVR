import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogaudio',
  templateUrl: './dialogaudio.component.html',
  styleUrls: ['./dialogaudio.component.css']
})
export class DialogaudioComponent {
constructor(public dialogRef:MatDialogRef<DialogaudioComponent>){}

close(){
  this.dialogRef.close("la vida es triste")
}
aceptar(){
  this.dialogRef.close("la vida es triste")
}
}
