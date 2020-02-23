import { Component, OnInit } from '@angular/core';
import { SocketService } from '../servicios/socket.service';
import { Router } from '@angular/router';
import { Jugador } from '../models/jugador';


@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss']
})

export class PartidasComponent implements OnInit {

  jugadores: Array<Jugador> = [];
  mensaje: string;

  constructor(private ss: SocketService, private router: Router) {
    // this.ss.onMessage().subscribe( (data: Array<Jugador>) => {
    //   console.log('Datos recibidos', data);
    //   this.jugadores = data;
    // });
    // this.ss.onDisconnect().subscribe( (data: Array<Jugador>) => {
    //   console.log('Datos recibidos, un usuario se ha desconectado', data);
    //   this.mensaje = 'Un usuario se desconectó de la partida...';
    //   setTimeout( () => {
    //     this.mensaje = null;
    //   }, 4000);
    //   this.jugadores = data;
    // });
    // this.ss.comenzarPartida().subscribe( (data: Partida) => {
    //   console.log('Comienza la partida', data);
    //   this.router.navigate(['escenario']);
    // });
  }

  ngOnInit() {
  }
}
