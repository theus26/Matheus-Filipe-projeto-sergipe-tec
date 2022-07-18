import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaEdicaoComponent } from './components/tela-edicao/tela-edicao.component';

const routes: Routes = [
    {path: '', component:TelaPrincipalComponent},
    {path:'Cadastro', component: TelaCadastroComponent},
    {path:'Editar/:id', component: TelaEdicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
