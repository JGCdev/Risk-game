import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/servicios/socket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JugadorService } from 'src/app/servicios/jugador.service';

@Component({
  selector: 'app-pantalla-carga',
  templateUrl: './pantalla-carga.component.html',
  styleUrls: ['./pantalla-carga.component.scss']
})
export class PantallaCargaComponent implements OnInit {

  jugadores = [];
  mensaje: string;
  id: string;
  sala: any;
  numbers: any;
  jugadoresPorLLegar: Array<number> = [];

  constructor(private ss: SocketService, private router: Router, private route: ActivatedRoute, private js: JugadorService) {
    this.route.paramMap.subscribe(params => {
      if (params.get('id') && this.js.getNombre() !== undefined) {
        this.id = params.get('id');
        this.ss.conectarSala(this.id, this.js.getNombre());
      } else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    this.ss.onNuevaConexionSala().subscribe( (data) => {
      this.ss.desconectarListaEspera();
      this.sala = data;
      const faltanJugadores = data.config.jugadores - data.personas.length;
      console.log('faltan jugadores se ejecuta y evalua a ', faltanJugadores);
      this.jugadoresPorLLegar = [];
      if (data.personas.length < data.config.jugadores) {
        for (let i = 0; i < faltanJugadores; i++)  {
          this.jugadoresPorLLegar.push(null);
        }
      // } else {
      //   console.log('partida llena, comenzamos');
      //   this.ss.comenzarPartida(this.sala.id);
       
     }
      console.log('entra alguien nuevo, recargamso objeto sala: ', this.sala);
    });
    this.ss.onErrorConexionSala().subscribe( (data) => {
      console.log('error al conectar', data);
    });
    this.ss.onComenzarPartida().subscribe( (elem) => {
      this.js.setSala(elem);
      console.log('comienza la partida: ', elem);
      this.router.navigate(['/partida/' + this.sala.id]);
    });
  }


}
