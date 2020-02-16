import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent implements OnInit {

  // Completar demás paises e importar de algún archivo como mapa o objeto juego
  paises: Array<Pais> = [
    {
      id: 0,
      nombre: 'Aus West',
      frontera: [2, 3, 4],
      fichas: 10,
      color: 'amarillo',
      selected: false,
      continente: 1
    },
    {
      id: 1,
      nombre: 'Aus E',
      frontera: [4, 1],
      fichas: 10,
      color: 'amarillo',
      selected: false,
      continente: 1
    },
    {
      id: 2,
      nombre: 'Aus Indo',
      frontera: [1, 4, 5],
      fichas: 10,
      color: 'amarillo',
      selected: false,
      continente: 1
    },
    {
      id: 3,
      nombre: 'Aus Guinea',
      frontera: [1, 2, 3],
      fichas: 10,
      color: 'amarillo',
      selected: false,
      continente: 1
    },
    {
      id: 4,
      nombre: 'India',
      frontera: [5, 6, 14, 15],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 5,
      nombre: 'Siam',
      frontera: [3, 4, 6],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 6,
      nombre: 'China',
      frontera: [4, 5, 7, 11, 13, 14],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 7,
      nombre: 'Mongolia',
      frontera: [6, 8, 9, 11, 12],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 8,
      nombre: 'Kamchatka',
      frontera: [7, 8, 9, 10, 12, 34],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 9,
      nombre: 'Japón',
      frontera: [7, 8],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 10,
      nombre: 'Yakursk',
      frontera: [8, 11, 12],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 11,
      nombre: 'Siberia',
      frontera: [],
      fichas: 12,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 12,
      nombre: 'Irkusk',
      frontera: [6, 7, 10, 11, 12, 13],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 13,
      nombre: 'Ural',
      frontera: [6, 11, 14, 35],
      fichas: 4,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 14,
      nombre: 'Afganistán',
      frontera: [4, 6, 13, 15, 33],
      fichas: 1,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 15,
      nombre: 'Oriente medio',
      frontera: [4, 14, 16, 18, 35, 41],
      fichas: 8,
      color: 'rojo',
      selected: false,
      continente: 2
    },
    {
      id: 16,
      nombre: 'Egipto',
      frontera: [15, 16, 17, 18, 41],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 3
    },
    {
      id: 17,
      nombre: 'África Norte',
      frontera: [16, 18, 19, 22, 40, 41],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 3
    },
    {
      id: 18,
      nombre: 'África Este',
      frontera: [15, 16, 17, 19, 20, 21],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 3
    },
    {
      id: 19,
      nombre: 'Congo',
      frontera: [17, 18, 20],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 3
    },
    {
      id: 20,
      nombre: 'África Sur',
      frontera: [18, 19, 21],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 3
    },
    {
      id: 21,
      nombre: 'Madagascar',
      frontera: [18, 20],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 4
    },
    {
      id: 22,
      nombre: 'Brasil',
      frontera: [17, 23, 24, 25],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 4
    },
    {
      id: 23,
      nombre: 'Perú',
      frontera: [22, 24, 25],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 4
    },
    {
      id: 24,
      nombre: 'Argentina',
      frontera: [22, 23],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 4
    },
    {
      id: 25,
      nombre: 'Venezuela',
      frontera: [22, 23, 26],
      fichas: 8,
      color: 'azul',
      selected: false,
      continente: 4
    },
    {
      id: 26,
      nombre: 'Centroamérica',
      frontera: [25, 27, 31],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 27,
      nombre: 'EEUU Oeste',
      frontera: [26, 28, 29, 31],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 28,
      nombre: 'Alberta',
      frontera: [27, 29, 33, 34],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 29,
      nombre: 'Ontario',
      frontera: [27, 28, 30, 31, 32, 33],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 30,
      nombre: 'Quebec',
      frontera: [29, 31, 32],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 31,
      nombre: 'EEUU Este',
      frontera: [26, 27, 29, 30],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 32,
      nombre: 'Groenlandia',
      frontera: [29, 30, 33, 36],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 33,
      nombre: 'EEUU Norte',
      frontera: [28, 29, 32, 34],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 34,
      nombre: 'Alaska',
      frontera: [8, 28, 33],
      fichas: 8,
      color: 'verde',
      selected: false,
      continente: 5
    },
    {
      id: 35,
      nombre: 'Ucrania',
      frontera: [13, 14, 15, 38, 39, 41],
      fichas: 1,
      color: 'morado',
      selected: false,
      continente: 6
    },
    {
      id: 36,
      nombre: 'Islandia',
      frontera: [32, 37, 38],
      fichas: 8,
      color: 'morado',
      selected: false,
      continente: 6
    },
    {
      id: 37,
      nombre: 'Gran Bretaña',
      frontera: [36, 38, 39, 40],
      fichas: 8,
      color: 'morado',
      selected: false,
      continente: 6
    },
    {
      id: 38,
      nombre: 'Escandinavia',
      frontera: [35, 36, 37, 39],
      fichas: 8,
      color: 'morado',
      selected: false,
      continente: 6
    },
    {
      id: 39,
      nombre: 'Europa del norte',
      frontera: [35, 37, 38, 40, 41],
      fichas: 8,
      color: 'morado',
      selected: false,
      continente: 6
    },
    {
      id: 40,
      nombre: 'Europa del este',
      frontera: [17, 37, 39, 41],
      fichas: 8,
      color: 'morado',
      selected: false,
      continente: 6
    },
    {
      id: 41,
      nombre: 'Europa del sur',
      frontera: [15, 16, 17, 35, 39, 40],
      fichas: 8,
      color: 'morado',
      selected: false,
      continente: 6
    },
  ];

  jugador =
    {
      id: 0,
      nombre: 'Jesus',
      turno: true,
      fase: 0,
      color: 0,
      colorString: 'morado',
      fichasDisp: 10,
    };

  // partida = {
  //   turno: 0,
  //   jugadores: [
  //     {
  //       id: 0,
  //       nombre: 'Jesus',
  //       turno: true,
  //       fase: 0,
  //       color: 0,
  //     },
  //     {
  //       id: 1,
  //       nombre: 'Pedro',
  //       turno: false,
  //       fase: 0,
  //       color: 1,
  //     }
  //   ]
  // };

  lastIdSelected: number = null;
  modal: boolean;
  posibleAtaque: Array<number> = [];
  coloresIndice = ['morado', 'verde', 'azul', 'rojo', 'naranja', 'amarillo'];
  fasesIndice = ['Inicial', 'Ataque', 'Defensa']
  constructor() {
  }

  ngOnInit() {
  }


  clickDch(id) {
    console.log('Has hecho click en: ' , this.paises[id]);
    // Si es nuestro turno, evaluamos
    if (this.jugador.turno) {
      // Acciones según fase
      this.seleccionarPais(id);
      switch (this.jugador.fase) {
        case 0:
          console.log('fase inicial');
          if (this.paisEnPosesion(id)) {
            console.log('es nuestro país');
            if (this.fichasDisponibles()) {
              console.log('podemos añadir fichas, mostramos modal para seleccionar:');
              this.lastIdSelected = id;
              this.modal = true;
            }
          } else {
            console.log('este país no es tuyo y estás en fase inicial');
          }
          break;
        case 1:
          console.log('fase de ataque');
          if (this.paisAtacable(id)) {
            console.log('atacamos');
            this.modal = true;
            this.posibleAtaque = [this.lastIdSelected, id];
          }
          break;
        case 2:
          console.log('fase ordenación');
          break;
      }

    }
  }

  paisAtacable(id) {
    if (this.paises[this.lastIdSelected].frontera.indexOf(this.paises[id].id) === -1) {
      return false;
    } else {
      return true;
    }
  }

  seleccionarPais(id) {
    if (this.paisEnPosesion(id)) {
      this.paises[id].selected = ! this.paises[id].selected;
      if (!this.nadaSeleccionado()) {
        this.paises[this.lastIdSelected].selected = ! this.paises[this.lastIdSelected].selected;
      }
      this.lastIdSelected = id;
    }
  }

  nadaSeleccionado() {
    if (this.lastIdSelected === null) {
      return true;
    } else {
      return false;
    }
  }

  paisEnPosesion(id) {
    if (this.jugador.id === this.coloresIndice.indexOf(this.paises[id].color)) {
      return true;
    } else {
      return false;
    }
  }

  fichasDisponibles() {
    if (this.jugador.fichasDisp > 0) {
      return true;
    } else {
      return false;
    }
  }

  mover(event) {
    console.log('Evento', event);
    switch (event.action) {
      case 0:
        console.log('fase de carga');
        this.paises[this.lastIdSelected].fichas += event.fichas;
        this.jugador.fichasDisp -= event.fichas;
        this.reset();
        if (this.jugador.fichasDisp === 0) {
          // Cambiamos a siguiente fase después de agotar fichas
          this.jugador.fase++;
        }
        break;
      case 1:
        console.log('ataque tipo: ', event.type);
        if (event.type === 1 ) {
          this.ataqueSubito(this.posibleAtaque);
        } else {
          this.ataquePorTurnos(this.posibleAtaque);
        }
        this.posibleAtaque = [];
        this.reset();
        break;
      case 2:
        console.log('fase ordenación');
        break;
    }
  }

  ataqueSubito(paises) {
    const atacante = this.paises[this.posibleAtaque[0]].fichas;
    const defensor = this.paises[this.posibleAtaque[1]].fichas;
    console.log('logica para atque súbito');
    console.log('ataco con ' + atacante + ' a ' + defensor);
  }

  ataquePorTurnos(paises) {
    console.log('logica para ataque por turnos');
  }

  reset() {
    this.paises[this.lastIdSelected].selected = false;
    this.lastIdSelected = null;
    this.modal = false;
  }



}
