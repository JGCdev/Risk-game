import { Component, OnInit, Input } from '@angular/core';
import { Sala } from 'src/app/models/sala';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.scss']
})
export class ListaSalasComponent implements OnInit {

  @Input() lista: Array<Sala>;
  enumInicio = ['Manual', 'Auto'];
  constructor() { }

  ngOnInit() {
  }

}
