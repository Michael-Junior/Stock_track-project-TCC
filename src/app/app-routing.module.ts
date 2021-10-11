import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsCadastroComponent } from './source_modules/product_screen/products/products.component';
import { productsListaComponent } from './source_modules/product_screen/product_list/product-list.component';

const routes: Routes = [
  { path: '', component: productsCadastroComponent }, /*Chama a tela principal*/
  { path: 'product_screen', component: productsListaComponent },
  { path: 'product_screen/cadastrar', component: productsCadastroComponent },
  { path: 'product_screen/:id/editar', component: productsCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
