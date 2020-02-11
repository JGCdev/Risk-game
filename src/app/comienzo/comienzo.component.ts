import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketService } from '../servicios/socket.service';

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.component.html',
  styleUrls: ['./comienzo.component.scss']
})
export class ComienzoComponent implements OnInit {

  socket: any;

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private ss: SocketService) {
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

    const usuario = {
      usuario: this.registerForm.value.name
    };

    this.ss.conectar(usuario);

    this.router.navigate(['partidas']);
  }

}
