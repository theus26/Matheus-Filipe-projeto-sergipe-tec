import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaEdicaoComponent } from './components/tela-edicao/tela-edicao.component';
const routes: Routes = [
    {path: '', component:TelaPrincipalComponent},
    {path:'edit', component: TelaEdicaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
