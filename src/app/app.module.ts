import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComienzoComponent } from './comienzo/comienzo.component';
import { PartidasComponent } from './partidas/partidas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EscenarioComponent } from './escenario/escenario.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComienzoComponent,
    PartidasComponent,
    EscenarioComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
