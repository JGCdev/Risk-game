import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalasComponent } from './salas/salas.component';
import { ElegirSalaComponent } from './elegir-sala/elegir-sala.component';
import { ListaSalasComponent } from './lista-salas/lista-salas.component';
import { CrearSalaComponent } from './crear-sala/crear-sala.component';


@NgModule({
  declarations: [BienvenidaComponent, SalasComponent, ElegirSalaComponent, ListaSalasComponent, CrearSalaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
