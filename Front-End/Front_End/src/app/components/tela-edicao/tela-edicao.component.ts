import { Component, OnInit } from '@angular/core';
import {Contribuentes} from 'src/app/Contribuentes'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-tela-edicao',
  templateUrl: './tela-edicao.component.html',
  styleUrls: ['./tela-edicao.component.css']
})
export class TelaEdicaoComponent implements OnInit {
  cadastroUser!: FormGroup
  contribuentes: Contribuentes[] = []

  constructor( private router:Router, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cadastroUser = new FormGroup({
    
      nome: new FormControl(this.contribuentes ? this.nome:'', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(``, [Validators.required,Validators.email]),
      cpf: new FormControl(``, [Validators.required,Validators.maxLength(15)]),
      telefone: new FormControl(``, [Validators.required, Validators.maxLength(11)]),
      celular: new FormControl(``, [Validators.required]),
      

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
  
  async submit(){
    if (this.cadastroUser.invalid) {
      return;
    }
    const data = {
      nome: this.nome.value,
      email: this.email.value,
      cpf: this.cpf.value,
      telefone: this.telefone.value,
      celular: this.telefone.value,

 
  }
console.log(data)
}
}
