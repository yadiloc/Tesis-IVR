import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {

    constructor(public dialogRef:MatDialogRef<AudioComponent>){}
    
    close(){
      this.dialogRef.close()
    }
    aceptar(){
      
    }
}
