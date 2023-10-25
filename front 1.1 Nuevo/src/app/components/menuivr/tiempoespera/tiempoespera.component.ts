import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogtextoComponent } from '../dialogtexto/dialogtexto.component';
import { Ivr } from '../menuivr.component';
import { FormControl, } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-tiempoespera',
  templateUrl: './tiempoespera.component.html',
  styleUrls: ['./tiempoespera.component.css']
})
export class TiempoesperaComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  estado:boolean=true;
  constructor(
    public dialogRef: MatDialogRef<TiempoesperaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Ivr,) {}
    
  close(){
    this.dialogRef.close(true)
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  //Validar la etrada de numeros 
  evaluar() {
    console.log("estaentrando en la funcion")
    if (this.data.tiempoespera!== undefined ) {
        this.estado = !this.estado
    }
  
    else {
          this.estado = true
     }
  }
}

