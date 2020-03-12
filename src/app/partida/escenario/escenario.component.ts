import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { SocketService } from 'src/app/servicios/socket.service';
import { Router } from '@angular/router';
import { JugadorService } from 'src/app/servicios/jugador.service';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent implements OnInit {
  // Este controlador debe ir en backend, cambiar lógica general de aplicación
  jugador: any;
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

  paises: Array<Pais>;
  partidaConfig: Array<any>;
  partidaJugadores: Array<any>;
  partida: any;

  idJugador: any;
  jugadorNuevo: any;
  menuActionsOpen: boolean;
  // Timer
  timeLeft = 60;
  interval: any;
  constructor(private ss: SocketService, private router: Router, private js: JugadorService) { }

  ngOnInit() {
    this.initEscenario();
  }

  initEscenario() {
    this.partida = this.js.getSala();
    this.idJugador = this.ss.getSocketId();
    if (this.partida !== undefined) {
      this.paises = this.partida.listaPaises;
      this.jugador = this.getPlayerById(this.idJugador);
      if (this.jugador !== undefined) {
        this.subscribePartidaEvents();
        if (this.jugador.turno) {
          this.comenzarTimer();
        }
      }
    } else {
      this.router.navigate(['']);
    }
  }

  subscribePartidaEvents() {
    this.ss.onTurnoChanged().subscribe( (res) => {
      console.log('escenario ha cambiado, actualizamos: ', res);
      this.paises = res.listaPaises;
      this.partida.personas = res.personas;
      res.personas.forEach(element => {
        if (element.id === this.jugador.id) {
          this.jugador = element;
        }
      });
      if (this.jugador.turno) {
        this.comenzarTimer();
      }
    });
    this.ss.onPaisesChanged().subscribe( (res) => {
      console.log('paises han cambiado', res);
      this.paises = res;
    });
  }
  clickPais(id) {
    console.log('Has hecho click en: ' , this.paises[id].nombre + ' id: ' + this.paises[id].id);
    // Si es nuestro turno, evaluamos
    if (this.jugador.turno) {
      // Acciones según fase
      switch (this.jugador.fase) {
        case 0:
          this.evaluarFase0(id);
          break;
        case 1:
          // console.log('fase de ataque');
          this.evaluarFase1(id);
          break;
        case 2:
          this.evaluarFase2(id);
          break;
      }
    }
  }
  evaluarFase0(id) {
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
  }
  evaluarFase1(id) {
    this.seleccionarPais(id);
    if (this.paisAtacable(id)) {
      console.log('atacamos');
      this.modal = true;
      this.posibleAtaque = [this.lastIdSelected, id];
    } else {
      console.log('no puedes atacar este país');
    }
  }
  evaluarFase2(id) {
    // Mejorar que se pueda volver atrás en la fase
    if (this.lastIdSelected === null) {
      this.seleccionarPais(id);
    } else {
      if (this.lastIdSelected !== null && this.jugador.color === this.paises[id].color) {
        if (this.paisesConectados(this.paises[id], this.paises[this.lastIdSelected])) {
          console.log('los paises son frontera');
          this.modal = true;
          this.posibleMovimiento = {
            paisInicio: this.lastIdSelected,
            paisFin:  id,
          };
          // Fix a máximo fichas realizado seteando esta propiedad (añadir a modelo si es necesario)
          this.jugador.maxAnadir = this.paises[this.lastIdSelected].fichas - 1;
        } else {
          console.log('los paises son aliados pero no están conectados');
        }
      } else {
        console.log('no se pueden transferir las tropas a jugadores de otro color');
      }
    }
  }

  mover(event) {
    console.log('Evento', event);
    switch (event.action) {
      case 0:
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
    // Solicitud de mover tropas
    if (this.paises[this.posibleMovimiento.paisInicio].fichas - 1 >= 1) {
      console.log('añadimos ' + num + 'tropas a', this.paises[this.posibleMovimiento.paisFin]);
      this.paises[this.posibleMovimiento.paisFin].fichas += num;
      this.paises[this.posibleMovimiento.paisInicio].fichas -= num;
      this.modal = false;
    }
    // Después de mover tropas se pasa automáticamente de fase
    this.siguienteFase();
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
    // Actualizar partida en cada acción que conlleve cambios pero solo actualizar lo que nos interesa para cada socket
    // this.ss.actualizarPartida(this.paises, this.partida.id);
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
    console.log('logica para ataque por turnos, por realizar');
  }

  addTropas(num) {
    // Si las fichas a añadir no sobrepasan las que tenemos para mover - 1, añadimos
    if (this.paises[this.conquistarModal.conquistador].fichas - 1 >= num) {
      this.paises[this.conquistarModal.conquistado].fichas += num;
      this.paises[this.conquistarModal.conquistador].fichas -= num;
      this.conquistarModal.active = false;
    } else {
      this.fichasAnadir = 0;
    }
  }

  atacar() {
    // Refactorizar al máximo, es un loop
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
    // Planteamiento: Comprobar si son vecinos, si no comprobar los vecinos del destino y tener array aux de descartes
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
    return estaConectado;
  }

  reset() {
    this.paises[this.lastIdSelected].selected = false;
    this.lastIdSelected = null;
    this.modal = false;
  }

  siguienteFase() {
    console.log('cambiar fase', this.jugador.fase);

    if (this.jugador.fase < 2) {
      this.jugador.fase++;
    } else {
      console.log('lanzamos evento cambio de fase');
      // Deseleccionamos todo antes de cambiar
      this.paises.forEach(element => {
        if (element.selected) {
          element.selected = !element.selected;
        }
      });
      this.partida.listaPaises = this.paises;
      this.ss.cambioTurno(this.partida);
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
    if (this.paises[id].color === this.jugador.color) {
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

  openMenu() {
    this.menuActionsOpen = !this.menuActionsOpen;
  }

  close() {
    this.modal = !this.modal;
  }

  comenzarTimer() {
    this.timeLeft = this.partida.config.tiempo * 60;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.siguienteTurnoForzado();
      }
    }, 1000);
  }

  siguienteTurnoForzado() {
    this.ss.cambioTurno(this.partida);
  }

  getPlayerById(id) {
    let player;
    this.partida.personas.forEach(element => {
      if (element.id === id) {
        player = element;
        console.log('el jugador es: ', element);
      }
    });
    return player;
  }
}
