import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { productsListaComponent } from './product/list/product-list.component';
import { productsCadastroComponent } from './product/form/products.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { SaidaProdutosComponent } from './saida-produtos/saida-produtos.component';
import { RegistrarSaidaComponent } from './saida-produtos/registrar-saida/registrar-saida.component';
import { HttpErrorInterceptor } from './http-interceptors/http-error-interceptor';

import { httpInterceptorProviders } from './http-interceptors';
import { ListComponent } from './vendor/list/list.component';
import { FormComponent } from './vendor/form/form.component';

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
    ListComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    httpInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
