import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaEdicaoComponent } from './components/tela-edicao/tela-edicao.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    TelaEdicaoComponent,
    TelaCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
