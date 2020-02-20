import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent implements OnInit {

  // importación desde JSON
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
      color: 'morado',
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
      frontera: [4, 6, 13, 15, 35],
      fichas: 1,
      color: 'morado',
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
      fichas: 4,
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
      color: 'morado',
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
      fase: 1,
      color: 0,
      colorString: 'morado',
      fichasDisp: 10,
    };

  lastIdSelected: number = null;
  modal: boolean;
  conquistarModal = {
    active: false,
    max: null,
    conquistado: null,
    conquistador: null
  };
  posibleAtaque: Array<number> = [];
  coloresIndice = ['morado', 'verde', 'azul', 'rojo', 'naranja', 'amarillo'];
  fasesIndice = ['Inicial', 'Ataque', 'Defensa'];

  fichasAnadir = 0;
  auxFronteras: Array<number> = [];
  auxFronterasArray: Array<number> = [];
  posibleMovimiento: any;

  constructor() {
  }

  ngOnInit() {
  }

  clickDch(id) {
    console.log('Has hecho click en: ' , this.paises[id].nombre + ' id: ' + this.paises[id].id);
    // Si es nuestro turno, evaluamos
    if (this.jugador.turno) {
      // Acciones según fase
      switch (this.jugador.fase) {
        case 0:
          this.seleccionarPais(id);
          if (this.paisEnPosesion(id)) {
            // console.log('es nuestro país');
            if (this.fichasDisponibles()) {
              // console.log('podemos añadir fichas, mostramos modal para seleccionar:');
              this.lastIdSelected = id;
              this.modal = true;
            }
          } else {
            console.log('este país no es tuyo y estás en fase inicial');
          }
          break;
        case 1:
          // console.log('fase de ataque');
          this.seleccionarPais(id);
          if (this.paisAtacable(id)) {
            console.log('atacamos');
            this.modal = true;
            this.posibleAtaque = [this.lastIdSelected, id];
          } else {
            console.log('no puedes atacar este país');
          }
          break;
        case 2:
          // console.log('fase ordenación');
          if (this.lastIdSelected === null) {
            this.seleccionarPais(id);
          } else {
            if (this.lastIdSelected !== null && this.jugador.colorString === this.paises[id].color) {
              if (this.paisesConectados(this.paises[id], this.paises[this.lastIdSelected])) {
                console.log('los paises son frontera');
                this.modal = true;
                this.posibleMovimiento = {
                  paisInicio: this.lastIdSelected,
                  paisFin:  id,
                };
              } else {
                console.log('los paises son aliados pero no están conectados');
              }
            } else {
              console.log('no se pueden transferir las tropas a jugadores de otro color');
            }
          }
          break;
      }

    }
  }

  paisAtacable(id) {
    if (this.paises[this.lastIdSelected].frontera.indexOf(this.paises[id].id) === -1 || this.paises[this.lastIdSelected].fichas < 2) {
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
        // console.log('fase de carga');
        this.paises[this.lastIdSelected].fichas += event.fichas;
        this.jugador.fichasDisp -= event.fichas;
        this.reset();
        if (this.jugador.fichasDisp === 0) {
          this.jugador.fase++;
        }
        break;
      case 1:
        if (event.type === 1 ) {
          this.ataqueSubito();
        } else {
          this.ataquePorTurnos();
        }
        this.posibleAtaque = [];
        this.reset();
        break;
      case 2:
        this.moverTropas(event.fichas);
        break;
    }
  }

  moverTropas(num) {
    if (this.paises[this.posibleMovimiento.paisInicio].fichas - 1 >= 1) {
      console.log('añadimos ' + num + 'tropas a', this.paises[this.posibleMovimiento.paisFin]);
      this.paises[this.posibleMovimiento.paisFin].fichas += num;
      this.paises[this.posibleMovimiento.paisInicio].fichas -= num;
      this.modal = false;
    }
  }

  ataqueSubito() {
    // Bucle hasta que uno de los paises se quede a cero - Modificar y hacer algo mas favorecedor para el defensor
    while (this.paises[this.posibleAtaque[0]].fichas !== 0 && this.paises[this.posibleAtaque[1]].fichas !== 0) {
      this.atacar();
    }
    if (this.paises[this.posibleAtaque[0]].fichas === 0) {
      // console.log(this.paises[this.posibleAtaque[0]].nombre + ' se ha quedado sin fichas');
      this.paises[this.posibleAtaque[0]].fichas = 1;
      console.log('perdemos por lo que dejamos a cero ' + this.paises[this.posibleAtaque[1]].nombre);
    } else {
      // console.log(this.paises[this.posibleAtaque[1]].nombre + ' se ha quedado sin fichas');
      this.conquistarPais(this.posibleAtaque[0], this.posibleAtaque[1]);
      console.log('conquistamos ' + this.paises[this.posibleAtaque[0]].nombre + ' desde ' + this.paises[this.posibleAtaque[1]].nombre);
    }
  }

  conquistarPais(conquistador, conquistado) {
    this.paises[conquistado].color = this.paises[conquistador].color;
    this.paises[conquistado].fichas += 2;
    this.paises[conquistador].fichas -= 2;
    this.conquistarModal.active = true;
    this.conquistarModal.max = this.paises[conquistador].fichas - 1;
    this.conquistarModal.conquistado = conquistado;
    this.conquistarModal.conquistador = conquistador;
    // Reseteamos input
    this.fichasAnadir = 0;
  }

  ataquePorTurnos() {
    console.log('logica para ataque por turnos');
  }

  addTropas(num) {
    // Si las fichas a añadir no sobrepasan las que tenemos para mover - 1
    if (this.paises[this.conquistarModal.conquistador].fichas - 1 >= num) {
      console.log('añadimos ' + num + 'tropas a' + this.conquistarModal.conquistado);
      this.paises[this.conquistarModal.conquistado].fichas += num;
      this.paises[this.conquistarModal.conquistador].fichas -= num;
      this.conquistarModal.active = false;
    } else {
      this.fichasAnadir = 0;
    }

  }

  atacar() {
    const atacante = this.paises[this.posibleAtaque[0]].fichas;
    const defensor = this.paises[this.posibleAtaque[1]].fichas;
    console.log('ataco con ' + atacante + ' a ' + defensor);
    let dadosAtacante = 0;
    let dadosDefensor = 0;
    let totalAtacante = 0;
    let totalDefensor = 0;
    // SI atacante es menor que defensor
    if (atacante < defensor) {
      console.log('Atacante es menor que el defensor');
      dadosAtacante = 1;
      dadosDefensor = 3;
      totalAtacante = this.lanzarDados(dadosAtacante);
      totalDefensor = this.lanzarDados(dadosDefensor);
      if (totalAtacante === totalDefensor) {
        this.eliminarFichas(this.posibleAtaque[0], this.posibleAtaque[1]);
      } else if (totalAtacante < totalDefensor) {
        this.eliminarFichas(this.posibleAtaque[0]);
      } else {
        this.eliminarFichas(this.posibleAtaque[1]);
      }
    }
    // Si atacante es = que defensor                        --- atacante más probabilidad   60% - 40%
    if (atacante === defensor) {
      console.log('Atacante es igual que el defensor');
      dadosAtacante = 2;
      dadosDefensor = 1;
      totalAtacante = this.lanzarDados(dadosAtacante);
      totalDefensor = this.lanzarDados(dadosDefensor);
      if (totalAtacante === totalDefensor) {
        this.eliminarFichas(this.posibleAtaque[0], this.posibleAtaque[1]);
      } else if (totalAtacante < totalDefensor) {
        this.eliminarFichas(this.posibleAtaque[0]);
      } else {
        this.eliminarFichas(this.posibleAtaque[1]);
      }
    }
    // Si atacante es > que el defensor y menor del doble   --- atacante más                70% - 30%
    if (atacante > defensor) {
      console.log('Atacante es mayor que el defensor');
      dadosAtacante = 3;
      dadosDefensor = 1;
      totalAtacante = this.lanzarDados(dadosAtacante);
      totalDefensor = this.lanzarDados(dadosDefensor);
      if (totalAtacante === totalDefensor) {
        this.eliminarFichas(this.posibleAtaque[0], this.posibleAtaque[1]);
      } else if (totalAtacante < totalDefensor) {
        this.eliminarFichas(this.posibleAtaque[0]);
      } else {
        this.eliminarFichas(this.posibleAtaque[1]);
      }
    }
  }

  eliminarFichas(pais, segundoPais?) {
    if (!segundoPais) {
      this.paises[pais].fichas -= 3;
      if (this.paises[pais].fichas < 0) {
        this.paises[pais].fichas = 0;
      }
    } else {
      this.paises[pais].fichas -= 1;
      this.paises[segundoPais].fichas -= 1;
      if (this.paises[pais].fichas < 0) {
        this.paises[pais].fichas = 0;
      } else if (this.paises[segundoPais].fichas < 0) {
        this.paises[segundoPais].fichas = 0;
      }
    }

  }

  lanzarDados(numero) {
    let totalResult = 0;
    for (let i = 0; i < numero; i++) {
      const numeroAleatorio = Math.round(Math.random() * 6);
      totalResult += numeroAleatorio;
    }
    return totalResult;
  }

  paisesConectados(paisDestino, paisPartida) {

    // Posible refactorización del método pero funcionando 100%, testear en diferentes escenarios
    // Crear nueva lógica conforme me ha comentado jose manuel
    // Filosofía: Comprobar si son vecinos, si no comprobar los vecinos del destino y tener array aux de descartes
    let estaConectado = false;
    const idOrigen = paisPartida.id;
    const idDestino = paisDestino.id;
    console.log(idOrigen);
    console.log(idDestino);

    // Crear array de ID de paises excluyendo diferente color, eliminar el destino y el inicio
    const paisesAliados = [];
    this.paises.forEach( (elem) => {
      if (elem.color === paisPartida.color && elem.id !== paisDestino.id && elem.id !== paisPartida.id) {
        paisesAliados.push(elem.id);
      }
    });
    console.log('array de paises aliados ', paisesAliados);

    // Comprobar las fronteras del pais de destino, si hay de color turno, comprobamos si alguna es el origen
    // Si no es el origen, quitamos las fronteras del color en el pais de destino, del array de IDs de los paises de color
    let fronterasColor = [];
    paisDestino.frontera.forEach(element => {
      if (element === idOrigen) {
        estaConectado = true;
      } else {
        if (paisesAliados.includes(element)) {
          fronterasColor.push(element);
        }
      }
    });

    if (!estaConectado && fronterasColor.length > 0 ) {
      while (estaConectado === false && paisesAliados.length !== 0) {
        fronterasColor.forEach( (elem, i) => {
          if (elem === idOrigen) {
            estaConectado = true;
          } else {
            fronterasColor = [];
            this.paises[elem].frontera.forEach( ( elemento ) => {
              if (elemento === idOrigen) {
                estaConectado = true;
              } else if (paisesAliados.includes(elemento)) {
                fronterasColor.push(elemento);
                paisesAliados.splice(paisesAliados.indexOf(elem), 1);
              }
            });
          }
        });
      }
    }
    console.log(fronterasColor);
    return estaConectado;
  }

  reset() {
    this.paises[this.lastIdSelected].selected = false;
    this.lastIdSelected = null;
    this.modal = false;
  }


  siguienteFase() {
    this.jugador.fase++;
  }

}
