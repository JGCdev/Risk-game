import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

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
  conectarListaEspera(usuario) {
    this.socket.emit('conectarListaEspera', usuario);
  }
  desconectarListaEspera() {
    this.socket.emit('desconectarListaEspera');
  }
  crearSala(config) {
    this.socket.emit('crearSala', config);
  }
  conectarSala(id, nickname) {
    const objConectar = {
      idSala: id,
      nick: nickname
    }
    this.socket.emit('conectarSala', objConectar);
  }
  conectar(usuario) {
    this.socket.emit('conectar', usuario);
  }
  cambioTurno(partida) {
    this.socket.emit('cambioTurno', partida);
  }
  actualizarPartida(paises, id) {
    console.log('pedimos actualización después de ataque');
    this.socket.emit('actualizarPartida', paises, id);
  }
  public onComenzarPartida(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('comenzarPartida', (data: any) => observer.next(data));
    });
  }
  public onTurnoChanged(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('cambioTurno', (data: any) => observer.next(data));
    });
  }
  public onPaisesChanged(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('actualizarPartida', (data: any) => observer.next(data));
    });
  }
  public onSalaCreada(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('salaCreada', (data: any) => observer.next(data));
    });
  }
  public onPartidaCreada(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('partidaCreada', (data: any) => observer.next(data));
    });
  }
  public onNuevaConexionSala(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('nuevaConexionSala', (data: any) => observer.next(data));
    });
  }
  public onErrorConexionSala(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('errorConexionSala', (data: any) => observer.next(data));
    });
  }
  public onChangeListaEspera(): Observable<Array<any>> {
    return new Observable<Array<any>>(observer => {
        this.socket.on('listaEspera', (data: Array<any>) => observer.next(data));
    });
  }

  getSocketId() {
    return this.socket.id;
  }
}
