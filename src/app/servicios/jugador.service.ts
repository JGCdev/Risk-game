import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  nick: string;
  sala: any;
  constructor() { }

  getNombre() {
    return this.nick;
  }

  setNombre(nick) {
    this.nick = nick;
  }

  setSala(val) {
    this.sala = val;
  }

  getSala() {
    return this.sala;
  }
}
