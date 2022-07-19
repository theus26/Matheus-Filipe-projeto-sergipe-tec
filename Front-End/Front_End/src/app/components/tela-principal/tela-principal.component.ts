import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service'
import {Contribuentes} from 'src/app/Contribuentes'
import {ActivatedRoute, Router} from '@angular/router'


declare var window:any; 

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
contribuentes: Contribuentes[] = []
item: String = ''



contribuentess = '';

  formModal:any;
  constructor(private listservice: ListService, private router:Router, private route:ActivatedRoute) { 
    this.getContribuentes()

  }

  ngOnInit(): void {
this.formModal = new window.bootstrap.Modal(
  document.getElementById("exampleModal")

);
    
  }

  

  getContribuentes(): void{
    //acessa o metodo service
    this.listservice.getAll().subscribe((contribuentes)=>(this.contribuentes = contribuentes) ) // esse getAll é uma fução la do service
  }

  removeContribuentes(contribuente:Contribuentes){
     this.contribuentes = this.contribuentes.filter((a) => contribuente.nome !== a.nome)
    this.listservice.remove(contribuente.id).subscribe()
  }

  updateForm(curso){
    this.formModal.patchValue({
      nome: curso.nome,
      id: curso.id
    })
  }


  openModal(event){
    this.item = event.target.parentNode.innerText
    this.formModal.show();
   
    
  }

  doSomething(){
    this.formModal.hide();
  }

  onEdit(x =1){
    console.log("Editado")
    this.router.navigate(['Editar', x], {relativeTo:this.route})
    this.route.params.subscribe(
      (params:any) =>{
        const id = params = x
        console.log(id)

        const curso$ = this.listservice.loadByID(id);
        curso$.subscribe(curso=>{
          this.updateForm(curso)
        })
      }
    )
  }

}
