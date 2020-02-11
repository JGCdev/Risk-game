import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-escenario',
  templateUrl: './escenario.component.html',
  styleUrls: ['./escenario.component.scss']
})
export class EscenarioComponent implements OnInit {

  fichaVerdeS: string;
  fichaMoradaS: string;
  fichaAzulS: string;
  fichaNaranjaS: string;
  fichaAmarillaS: string;
  fichaRojaS: string;
  fichaVerdeI: string;
  fichaMoradaI: string;
  fichaAzulI: string;
  fichaNaranjaI: string;
  fichaAmarillaI: string;
  fichaRojaI: string;
  ausW: object;
  ausE: object;
  ausIndo: object;
  ausGuinea: object;

  constructor() {
    this.fichaVerdeS = 'f-verde-s';
    this.fichaMoradaS = 'f-violeta-s';
    this.fichaAzulS = 'f-azul-s';
    this.fichaNaranjaS = 'f-naranja-s';
    this.fichaAmarillaS = 'f-amar-s';
    this.fichaRojaS = 'f-rojo-s';
    this.fichaVerdeI = 'f-verde-i';
    this.fichaMoradaI = 'f-violeta-i';
    this.fichaAzulI = 'f-azul-i';
    this.fichaNaranjaI = 'f-naranja-i';
    this.fichaAmarillaI = 'f-amar-i';
    this.fichaRojaI = 'f-rojo-i';

    // Esta es la parte que vale, añadir color de territorio por si está cogido, generar esto por cada continente, 
    // hacer interface o modelo de continente, tratar parte de la logica desde backend, tener en cuenta
    this.ausW = {
      fichaSuperior: this.fichaAzulS,
      fichaInferior: this.fichaAzulI,
      fichas: 10,
      color: 'verde',
      double: true,
    };
    this.ausE = {
      fichaSuperior: this.fichaAzulS,
      fichaInferior: this.fichaAzulI,
      fichas: 10,
      color: 'morado',
      double: true,
    };
    this.ausIndo = {
      fichaSuperior: this.fichaAzulS,
      fichaInferior: this.fichaAzulI,
      fichas: 10,
      color: 'azul',
      double: true,
    };
    this.ausGuinea = {
      fichaSuperior: this.fichaAzulS,
      fichaInferior: this.fichaAzulI,
      fichas: 10,
      color: 'naranja',
      double: true,
    };

  }

  ngOnInit() {
  }


  modificarFichasTerritorio() {

  }

  modificarColorTerritorio() {

  }

  atacarTerritorio() {

  }

  
}
