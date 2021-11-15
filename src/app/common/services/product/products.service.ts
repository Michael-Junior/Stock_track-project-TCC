import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/product/models/products-model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private urlApi = `${environment.baseUrl}/api/produto`;
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<Product[]>(this.urlApi + `${'s'}`, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .pipe(catchError(this.treatError));
  }

  getProduct(id: string): Observable<Product> {
    if (id === '') {
      return of(this.inicializeProduct());
    }

    const urlId = `${this.urlApi}/${id}`;

    return this.http.get<Product>(urlId).pipe(catchError(this.treatError));
  }

  createProduct(Product: Product) {
    const token = window.localStorage.getItem('token');
    return this.http
      .post<Product>(this.urlApi + `${'s'}`, Product, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .pipe(catchError(this.treatError));
  }

  updateProduct(Product: Product) {
    const token = window.localStorage.getItem('token');

    const urlId = `${this.urlApi}/${Product.id}`;
    return this.http
      .put<Product>(urlId, Product, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .pipe(catchError(this.treatError));
  }

  deleteProduct(id: string) {
    const token = window.localStorage.getItem('token');

    const urlId = `${this.urlApi}/${id}`;
    return this.http
      .delete<Product>(urlId, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .pipe(catchError(this.treatError));
  }

  async getOutputProducts(): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.http
      .get(`${environment.baseUrl}/api/saida/produtos`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }

  async postOutputProduct(outputProduct: Record<string, string>): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.http
      .post(`${environment.baseUrl}/api/saida/produto`, outputProduct, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }

  private treatError(err: any) {
    let msgErro: string;

    if (err.error instanceof ErrorEvent) {
      msgErro = `Ocorreu um erro: ${err.error.message}`;
    } else {
      msgErro = `Ocorreu um erro na API. StatusCode: ${err.status}, Desc.: ${err.body.error}`;
    }
    return throwError(msgErro);
  }

  private inicializeProduct(): Product {
    return {
      id: '',
      nome: '',
      descricao: '',
      ativo: true,
      precoCusto: 0.0,
      margemLucro: 0.0,
      status: '',
    };
  }
}
