import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComienzoComponent } from './comienzo/comienzo.component';
import { PartidasComponent } from './partidas/partidas.component';
import { EscenarioComponent } from './escenario/escenario.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'salas', pathMatch: 'full'
  },
  {
    path: 'salas',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'partida',
    loadChildren: () => import('./partida/partida.module').then(m => m.PartidaModule)
  },
  {
    path: 'comienzo', component: ComienzoComponent
  },
  {
    path: 'partidas', component: PartidasComponent
  },
  {
    path: 'escenario', component: EscenarioComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
