import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidaRoutingModule } from './partida-routing.module';
import { EscenarioComponent } from './escenario/escenario.component';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './actions/actions.component';


@NgModule({
  declarations: [EscenarioComponent, ActionsComponent],
  imports: [
    CommonModule,
    PartidaRoutingModule,
    FormsModule
  ]
})
export class PartidaModule { }
