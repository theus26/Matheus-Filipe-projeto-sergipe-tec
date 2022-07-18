import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {
  cadastroUser!:FormGroup
  constructor() {
   }

  ngOnInit(): void {
    
    (() => {
      'use strict';
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation');
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();

    
    this.cadastroUser = new FormGroup({
      id: new FormControl(``),
      nome: new FormControl(``, [Validators.required]),
      email: new FormControl(``,[Validators.required]),
      cpf: new FormControl(``,[Validators.required]),
      telefone: new FormControl(``,[Validators.required]),
      celular: new FormControl(``,[Validators.required]),
      rua:  new FormControl(``,[Validators.required]),
      numero:  new FormControl(``,[Validators.required]),
      bairro:  new FormControl(``,[Validators.required]),
      cidade:  new FormControl(``,[Validators.required]),
      estado:  new FormControl(``,[Validators.required]),
      pais:  new FormControl(``,[Validators.required]),
      cep:  new FormControl(``,[Validators.required]),
      
    });
  }


  get nome(){
    return this.cadastroUser.get('nome')!;
  }

  get email(){
    return this.cadastroUser.get('email')!;
  }

  get cpf(){
    return this.cadastroUser.get('cpf')!;
  }

  get telefone(){
    return this.cadastroUser.get('telefone')!;
  }
  get rua(){
    return this.cadastroUser.get('rua')!;
  }

  get numero(){
    return this.cadastroUser.get('numero')!;
  }

  get bairro(){
    return this.cadastroUser.get('bairro')!;
  }

  get cep(){
    return this.cadastroUser.get('cep')!;
  }

  get cidade(){
    return this.cadastroUser.get('cidade')!;
  }

  get estado(){
    return this.cadastroUser.get('estado')!;
  }

  get pais(){
    return this.cadastroUser.get('pais')!;
  }

  get celular(){
    return this.cadastroUser.get('celular')!;
  }




 async submit(){
      //e.preventDefault()
      if (this.cadastroUser.invalid){
        return;
      }
      const data = {
        nome: this.nome.value,
        email: this.email.value,
        cpf:this.cpf.value,
        telefone:this.telefone.value,
        celular:this.telefone.value,
        rua:this.rua.value
        

      }
      const dataJson = JSON.stringify(data);
      const req = await fetch("http://localhost:3000/Contribuintes", {
        method: "POST",
        headers: { "content-type": "application/json" }, // estou dizendo que o tipo de dado enviado é o JSON
        body: dataJson,
      }); // aqui estou fazendo a requisição pra enviar meus dados para meu arquivo bd.json, usando um metodo, especificações e o arquivo de texto
      const receber = await req.json(); // recebendo os meus dados json
      console.log(receber);

     // console.log(dataJson)

      
      //console.log(this.cadastroUser.value)


      
  }




}
