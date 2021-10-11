import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsCadastroComponent } from './source_modules/screens/product/form/products.component';
import { productsListaComponent } from './source_modules/screens/product/list/product-list.component';
import { BackgroundComponent } from './source_modules/screens/background_main/background.component';

const routes: Routes = [
  { path: '', component: BackgroundComponent },
  { path: 'cadastro-de-produtos', component: productsListaComponent },
  { path: 'cadastro-de-produtos/cadastrar', component: productsCadastroComponent },
  { path: 'cadastro-de-produtos/:id/editar', component: productsCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
