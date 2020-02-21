import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  nick: string;

  constructor() { }

  getNombre() {
    return this.nick;
  }

  setNombre(nick) {
    this.nick = nick;
  }
}
