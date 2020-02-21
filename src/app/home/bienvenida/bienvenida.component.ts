import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JugadorService } from 'src/app/servicios/jugador.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private js: JugadorService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  conectar() {

    if (this.registerForm.invalid) {
      return;
    }

    this.js.setNombre(this.registerForm.value.name);

    this.router.navigate(['salas/elegir-sala']);
  }
}
