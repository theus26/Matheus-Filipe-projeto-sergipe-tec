import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';

const routes: Routes = [
    {path: '', component:TelaPrincipalComponent},
    {path:'Cadastro', component: TelaCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
