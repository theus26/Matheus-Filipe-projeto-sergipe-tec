import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css'],
})
export class TelaCadastroComponent implements OnInit {
  cadastroUser!: FormGroup;
  Cadastrado: Boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    (() => {
      'use strict';

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation');

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener(
          'submit',
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    })();

    this.cadastroUser = new FormGroup({
      id: new FormControl(``),
      nome: new FormControl(``, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(``, [Validators.required, Validators.email]),
      cpf: new FormControl(``, [Validators.required, Validators.maxLength(15)]),
      telefone: new FormControl(``, [
        Validators.required,
        Validators.maxLength(11),
      ]),
      celular: new FormControl(``, [Validators.required]),
      rua: new FormControl(``, [Validators.required]),
      numero: new FormControl(``, [Validators.required]),
      bairro: new FormControl(``, [Validators.required]),
      cidade: new FormControl(``, [Validators.required]),
      estado: new FormControl(``, [Validators.required]),
      pais: new FormControl(``, [Validators.required]),
      cep: new FormControl(``, [Validators.required]),
    });
  }

  get nome() {
    return this.cadastroUser.get('nome')!;
  }

  get email() {
    return this.cadastroUser.get('email')!;
  }

  get cpf() {
    return this.cadastroUser.get('cpf')!;
  }

  get telefone() {
    return this.cadastroUser.get('telefone')!;
  }
  get rua() {
    return this.cadastroUser.get('rua')!;
  }

  get numero() {
    return this.cadastroUser.get('numero')!;
  }

  get bairro() {
    return this.cadastroUser.get('bairro')!;
  }

  get cep() {
    return this.cadastroUser.get('cep')!;
  }

  get cidade() {
    return this.cadastroUser.get('cidade')!;
  }

  get estado() {
    return this.cadastroUser.get('estado')!;
  }

  get pais() {
    return this.cadastroUser.get('pais')!;
  }

  get celular() {
    return this.cadastroUser.get('celular')!;
  }

  async submit() {
    if (this.cadastroUser.invalid) {
      return;
    }
    const data = {
      nome: this.nome.value,
      email: this.email.value,
      cpf: this.cpf.value,
      telefone: this.telefone.value,
      celular: this.telefone.value,
      rua: this.rua.value,
      numero: this.numero.value,
      bairro: this.bairro.value,
      cidade: this.cidade.value,
      cep: this.cep.value,
      estado: this.estado.value,
      pais: this.pais.value,
    };
    const dataJson = JSON.stringify(data);
    const req = await fetch('http://localhost:3000/Contribuintes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: dataJson,
    });
    const receber = await req.json();
    console.log(receber);
    window.scroll({
      top:0,
      behavior:'smooth'
    })
    this.Cadastrado = true;
    setTimeout(() => {
     
      this.router.navigate([''], { relativeTo: this.route });
    }, 3000);
  }
}
