import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasCadastroComponent } from './source_modules/product_screen/products/products.component';
import { TarefasListaComponent } from './source_modules/product_screen/product_list/product-list.component';

const routes: Routes = [
  { path: '', component: TarefasListaComponent },
  { path: 'product_screen', component: TarefasListaComponent },
  { path: 'product_screen/cadastrar', component: TarefasCadastroComponent },
  { path: 'product_screen/:id/editar', component: TarefasCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
