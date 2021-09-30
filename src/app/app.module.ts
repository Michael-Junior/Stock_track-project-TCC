import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TarefasListaComponent } from './tarefas/components/tarefas-lista/tarefas-lista.component';
import { TarefasCadastroComponent } from './tarefas/components/tarefas-cadastro/tarefas-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    TarefasListaComponent,
    TarefasCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
