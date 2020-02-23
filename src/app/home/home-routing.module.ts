import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SalasComponent } from './salas/salas.component';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { PantallaCargaComponent } from './pantalla-carga/pantalla-carga.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'bienvenida', pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  },
  {
    path: 'elegir-sala',
    component: SalasComponent
  },
  {
    path: 'crear-sala',
    component: CrearSalaComponent
  },
  {
    path: 'sala-espera/:id',
    component: PantallaCargaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
