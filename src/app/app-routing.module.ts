import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasCadastroComponent } from './tarefas/components/tarefas-cadastro/tarefas-cadastro.component';
import { TarefasListaComponent } from './tarefas/components/tarefas-lista/tarefas-lista.component';

const routes: Routes = [
  { path: '', component: TarefasListaComponent },
  { path: 'tarefas', component: TarefasListaComponent },
  { path: 'tarefas/cadastrar', component: TarefasCadastroComponent },
  { path: 'tarefas/:id/editar', component: TarefasCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
