import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SalasComponent } from './salas/salas.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';
import { PantallaCargaComponent } from './pantalla-carga/pantalla-carga.component';


@NgModule({
  declarations: [BienvenidaComponent, SalasComponent, ListaSalasComponent, CrearSalaComponent, PantallaCargaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
