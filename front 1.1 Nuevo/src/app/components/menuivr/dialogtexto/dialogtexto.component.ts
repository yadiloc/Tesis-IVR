import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Texto } from 'src/app/models/texto';
@Component({
  selector: 'app-dialogtexto',
  templateUrl: './dialogtexto.component.html',
  styleUrls: ['./dialogtexto.component.css']
})
export class DialogtextoComponent {

  // myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]> | undefined;
  habilitar: boolean=true;
  constructor(
    public dialogRef: MatDialogRef<DialogtextoComponent>,
    @Inject(MAT_DIALOG_DATA) public   textomensaje:Texto,
  ) {
  
  }

  close(){
    this.dialogRef.close(true)
  }
 
  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
  contenido:string="";
  activar(){
    if(this.textomensaje!==undefined){ 
      this.habilitar=!this.habilitar
    }
    else{
        this.habilitar=true
    }
    }
}

