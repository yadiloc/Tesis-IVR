import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MenuivrComponent } from './components/menuivr/menuivr.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DialogbienvenidaComponent } from './components/menuivr/dialogbienvenida/dialogbienvenida.component';

import { DialogtextoComponent } from './components/menuivr/dialogtexto/dialogtexto.component';
import{MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from "@angular/material/button";
import { TablaivrComponent } from './components/home/tablaivr/tablaivr.component';
import { TransferenciaComponent } from './components/menuivr/transferencia/transferencia.component';
import { TiempoesperaComponent } from './components/menuivr/tiempoespera/tiempoespera.component';
import { MenuinteractivoComponent } from './components/menuivr/menuinteractivo/menuinteractivo.component';
import { ConsultasBDComponent } from './components/menuivr/consultas-bd/consultas-bd.component';
import { GuardarivrComponent } from './components/menuivr/guardarivr/guardarivr.component';
import { AudioComponent } from './components/menuivr/audio/audio.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import  {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuivrComponent,
    DialogbienvenidaComponent,

    DialogtextoComponent,
    TablaivrComponent,
    TransferenciaComponent,
    TiempoesperaComponent,
    MenuinteractivoComponent,
    ConsultasBDComponent,
    GuardarivrComponent,
    AudioComponent,
   
    
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterLink ,
    MatChipsModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
