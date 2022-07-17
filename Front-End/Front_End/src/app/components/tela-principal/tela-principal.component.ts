import { Component, OnInit } from '@angular/core';
declare var window:any; 

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
  formModal:any;
  constructor() { }

  ngOnInit(): void {
this.formModal = new window.bootstrap.Modal(
  document.getElementById("exampleModal")
);
    
  }

  openModal(){
    this.formModal.show();
    console.log("jnjnnju")
  }

  doSomething(){
    this.formModal.hide();
  }

}
