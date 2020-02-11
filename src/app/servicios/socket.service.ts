import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Jugador } from '../jugador';
import { Partida } from '../partida';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
    // Test local
    // this.socket = io('http://192.168.0.164:3000');
  }

  conectar(usuario) {
    this.socket.emit('conectar', usuario);
  }

  public onMessage(): Observable<Array<Jugador>> {
    return new Observable<Array<Jugador>>(observer => {
        this.socket.on('partida', (data: Array<Jugador>) => observer.next(data));
    });
  }
  public onDisconnect(): Observable<Array<Jugador>> {
    return new Observable<Array<Jugador>>(observer => {
        this.socket.on('desc', (data: Array<Jugador>) => observer.next(data));
    });
  }
  public comenzarPartida(): Observable<Partida> {
    return new Observable<Partida>(observer => {
        this.socket.on('comenzarPartida', (data: Partida) => observer.next(data));
    });
  }
}
