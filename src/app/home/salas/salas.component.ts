import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/servicios/jugador.service';
import { Router } from '@angular/router';
import { Sala } from 'src/app/models/sala';
import { SocketService } from 'src/app/servicios/socket.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {

  playerName: string;
  listaSalas: Array<Sala> = [];
  jugadoresConectados = 0;

  constructor(private js: JugadorService, private router: Router, private ss: SocketService) {
    this.ss.onChangeListaEspera().subscribe( (data: any) => {
      console.log('Cambios en lista de espera', data);
      this.listaSalas = data.partidas;
      this.jugadoresConectados = data.jugadoresListaEspera.length;
    });
  }

  ngOnInit() {
    this.playerName = this.js.getNombre();
    if (this.playerName === undefined) {
      this.router.navigate(['']);
    }
    const usuario = {
      usuario: this.playerName
    };
    this.ss.conectarListaEspera(usuario);
    // const sala = {
    //   id: 1256,
    //   jugadoresMax: 4,
    //   tiempoTurnos: 2,
    //   inicio: 0,
    //   jugadores: [
    //     {
    //       nombre: 'xexuszgz',
    //       color: 'amarillo',
    //       id: 2,
    //     },
    //     {
    //       nombre: 'pablito',
    //       color: 'verde',
    //       id: 4,
    //     }
    //   ]
    // };
    // this.listaSalas.push(sala);
    // this.listaSalas.push(sala);
  }

  ngOnDestroy() {
 
  }

}
