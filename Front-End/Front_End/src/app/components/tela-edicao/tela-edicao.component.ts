import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-tela-edicao',
  templateUrl: './tela-edicao.component.html',
  styleUrls: ['./tela-edicao.component.css'],
})
export class TelaEdicaoComponent implements OnInit {
  editUser!: FormGroup;
  editado: Boolean = false;
  Neditado: Boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listservice: ListService
  ) {}

  ngOnInit(): void {
    // let registro = null
    // this.route.params.subscribe((params: any) => {
    //   const id = params['id'];
    //   console.log(id);
    //   const curso$ = this.listservice.loadByID(id);
    //   curso$.subscribe((curso) => {
    //     registro = curso
    //     this.updateForm(curso);
    //   });
    // });

    let registro = null;
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.listservice.loadByID(id))
      )
      .subscribe((curso) => this.updateForm(curso));

    this.editUser = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(``, [Validators.required, Validators.email]),
      cpf: new FormControl(``, [Validators.required, Validators.maxLength(15)]),
      telefone: new FormControl(``, [
        Validators.required,
        Validators.maxLength(11),
      ]),
      celular: new FormControl(``, [Validators.required]),
    });
  }
  get id() {
    return this.editUser.get('id')!;
  }

  get nome() {
    return this.editUser.get('nome')!;
  }

  get email() {
    return this.editUser.get('email')!;
  }

  get cpf() {
    return this.editUser.get('cpf')!;
  }

  get telefone() {
    return this.editUser.get('telefone')!;
  }

  

  updateForm(curso) {
    this.editUser.patchValue({
      id: curso.id,
      nome: curso.nome,
      cpf: curso.cpf,
      email: curso.email,
      telefone: curso.telefone,
      celular: curso.celular,
    });
  }

  async submit() {
    if (this.editUser.invalid) {
      return;
    }
    if(this.editUser.value.id){
      this.listservice.update(this.editUser.value).subscribe()
      window.scroll({
        top:0,
        behavior:'smooth'
      })
      this.editado = true;
      
      setTimeout( () => {
        this.router.navigate([''], {relativeTo:this.route})
      },1500)
  
  
    
    }else{
      window.scroll({
        top:0,
        behavior:'smooth'
      })
      this.Neditado = true;
      
    }
  }
}
