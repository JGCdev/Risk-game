import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Output() moverEvent = new EventEmitter();
  @Output() closeEvent = new EventEmitter();
  @Input() jugador;
  fichasMover = 1;
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

  closeModal() {
    this.closeEvent.emit();
  }
}
