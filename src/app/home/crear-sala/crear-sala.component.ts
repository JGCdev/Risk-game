import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.scss']
})
export class CrearSalaComponent implements OnInit {
  addSalaForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addSalaForm = this.formBuilder.group({
      tiempo: ['', Validators.required],
      jugadores: ['', Validators.required],
      inicio: ['', Validators.required]
    });
  }

  crearSala() {
    console.log(this.addSalaForm);
    if (this.addSalaForm.invalid) {
      return;
    }


  }
}
