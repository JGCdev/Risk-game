import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent implements OnInit {

  // Id para analizar si es posible atacarle o no, añadir array de posibles ataques.
  continentes = [
    {
      australia: [
        {
          id: 1,
          nombre: 'Aus West',
          frontera: [2, 3, 4],
          fichas: 10,
          color: 'verde',
          selected: false,
        },
        {
          id: 2,
          nombre: 'Aus E',
          frontera: [4, 1],
          fichas: 10,
          color: 'morado',
          selected: false,
        },
        {
          id: 3,
          nombre: 'Aus Indo',
          frontera: [1, 4, 5],
          fichas: 10,
          color: 'azul',
          selected: false,
        },
        {
          id: 4,
          nombre: 'Aus Guinea',
          frontera: [1, 2, 3],
          fichas: 10,
          color: 'naranja',
          selected: false,
        },
      ]
    },
    {
      asia: [
        {
          id: 5,
          nombre: 'India',
          frontera: [],
          fichas: 1,
          color: 'naranja',
          selected: false,
        },
        {
          id: 6,
          nombre: 'Siam',
          frontera: [],
          fichas: 1,
          color: 'naranja',
          selected: false,
        },
        {
          id: 7,
          nombre: 'China',
          frontera: [],
          fichas: 1,
          color: 'naranja',
          selected: false,
        }
      ]
    },
    {
      europa: [

      ]
    },
    {
      americaN: [

      ]
    },
    {
      americaS: [

      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


  clickDch(elem) {
    console.log('cojemos clickc en elemento: ', elem);
    // cambiar switch por bucle que pare cuando encuentre el id para ponerlo selected

    switch(elem) {
      case 1:
          this.continentes[0].australia[0].selected = !this.continentes[0].australia[0].selected;
          break;
      default:
      
      break;
    }
  }

  modificarFichasTerritorio() {

  }

  modificarColorTerritorio() {

  }

  atacarTerritorio() {

  }

  
}
