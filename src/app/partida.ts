import { Jugador } from './jugador';

export interface Partida {
    numeroPartida: number;
    jugadores: Array<Jugador>;
}
