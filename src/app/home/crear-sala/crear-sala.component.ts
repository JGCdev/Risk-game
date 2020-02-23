import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/servicios/socket.service';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.scss']
})
export class CrearSalaComponent implements OnInit {
  configPartida = {
    tiempo: '',
    jugadores: '',
    inicio: ''
  };
  constructor(private ss: SocketService, private js: JugadorService, private router: Router) {

  }

  ngOnInit() {
    this.ss.onSalaCreada().subscribe( (res) => {
      console.log('navegamos a sala con id de sala');
      console.log(res);
      this.js.setSala(res);
      this.router.navigate(['/salas/sala-espera/' + res.id]);
    });
  }

  crearSala() {
    if (this.configPartida.tiempo !== '' && this.configPartida.inicio !== '' && this.configPartida.jugadores !== '') {
      console.log('Form valid: ', this.configPartida);
      const partida = {
        config: this.configPartida,
        user: this.js.getNombre()
      };
      this.ss.crearSala(partida);
    } else {
      return;
    }

  }
}
