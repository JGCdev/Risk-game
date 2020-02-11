import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComienzoComponent } from './comienzo/comienzo.component';
import { PartidasComponent } from './partidas/partidas.component';
import { EscenarioComponent } from './escenario/escenario.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'comienzo', pathMatch: 'full'
  },
  {
    path: 'comienzo', component: ComienzoComponent
  },
  {
    path: 'partidas', component: PartidasComponent
  },
  {
    path: 'escenario', component: EscenarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
