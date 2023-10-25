import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuivrComponent } from './components/menuivr/menuivr.component';
import { GuardarivrComponent } from './components/menuivr/guardarivr/guardarivr.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"home"
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"menu",
    component:MenuivrComponent,
  },
  {
    path:"guardar",
    component:GuardarivrComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
