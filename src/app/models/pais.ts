export interface Pais {
    id: number;
    nombre: string;
    frontera: Array<number>;
    fichas: number;
    color: string;
    selected: boolean;
    continente: number;
}