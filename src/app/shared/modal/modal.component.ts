import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() moverEvent = new EventEmitter();
  @Input() jugador;
  constructor() { }

  ngOnInit() {
  }

  muerteSubita() {
    this.moverEvent.emit({ action: 1, type: 1 });
  }

  porTurnos() {
    this.moverEvent.emit({ action: 1, type: 2 });
  }

  addFichas(num) {
    console.log('add ', num);
    this.moverEvent.emit({ action: 0, fichas: num });
  }

  moverFichas(num) {
    console.log('move ', num);
    this.moverEvent.emit({ action: 2, fichas: num });
  }
}
