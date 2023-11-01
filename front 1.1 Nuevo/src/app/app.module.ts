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
import { ConsultasBDComponent } from './components/menuivr/consultas-bd/consultas-bd.component';
import { AudioComponent } from './components/menuivr/audio/audio.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import  {MatListModule} from '@angular/material/list';
import { DialogconfirmComponent } from './components/dialogconfirm/dialogconfirm.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ElimDiagComponent } from './components/home/tablaivr/elim-diag/elim-diag.component';
import { ModfDiagComponent } from './components/home/tablaivr/modf-diag/modf-diag.component';
import { AudioService } from './services/audio.service';
import { TextoService } from './services/texto.service';




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
    ConsultasBDComponent,
    AudioComponent,
    DialogconfirmComponent,
    ElimDiagComponent,
    ModfDiagComponent,
  
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
    HttpClientModule,
    
  ],
  providers: [AudioService, TextoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
