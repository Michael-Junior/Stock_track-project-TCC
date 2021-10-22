import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsCadastroComponent } from './product/form/products.component';
import { productsListaComponent } from './product/list/product-list.component';
import { BackgroundComponent } from './common/screens/background_main/background.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/guard/auth.guard';
import { SaidaProdutosComponent } from './saida-produtos/saida-produtos.component';
import { RegistrarSaidaComponent } from './saida-produtos/registrar-saida/registrar-saida.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BackgroundComponent },
      { path: 'cadastro-de-produtos', component: productsListaComponent },
      {
        path: 'cadastro-de-produtos/cadastrar',
        component: productsCadastroComponent,
      },
      {
        path: 'cadastro-de-produtos/:id/editar',
        component: productsCadastroComponent,
      },
      { path: 'saida-produtos', component: SaidaProdutosComponent },
      { path: 'saida-produtos/registrar', component: RegistrarSaidaComponent },
      { path: 'product-registration', component: productsListaComponent },
      {
        path: 'product-registration/cadastrar',
        component: productsCadastroComponent,
      },
      {
        path: 'product-registration/:id/editar',
        component: productsCadastroComponent,
      },
    ],
    canActivate: [AuthGuard],
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
