import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscenarioComponent } from './escenario/escenario.component';


const routes: Routes = [
  {
    path: ':id',
    component: EscenarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidaRoutingModule { }
