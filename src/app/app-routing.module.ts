import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
