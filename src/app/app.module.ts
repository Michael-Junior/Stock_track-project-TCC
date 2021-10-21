import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './source_modules/screens/component_navbar/navbar/navbar.component';
import { productsListaComponent } from './source_modules/screens/product/list/product-list.component';
import { productsCadastroComponent } from './source_modules/screens/product/form/products.component';
import { LoginComponent } from './services/account/login/login.component';
import { CreateAccountComponent } from './services/account/create-account/create-account.component';
import { HomeComponent } from './services/layout/home/home.component';
import { AuthenticationComponent } from './services/layout/authentication/authentication.component';
import { SaidaProdutosComponent } from './source_modules/screens/saida-produtos/saida-produtos.component';
import { RegistrarSaidaComponent } from './source_modules/screens/saida-produtos/registrar-saida/registrar-saida.component';

import { httpInterceptorProviders } from './services/http-interceptors';


@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    productsListaComponent,
    productsCadastroComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    SaidaProdutosComponent,
    RegistrarSaidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
