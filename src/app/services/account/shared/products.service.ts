import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/source_modules/models/products-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(`${environment.baseUrl}/api/produtos`);
  }

  getProductById(id: string) {
    return this.http.get<Product[]>(`${environment.baseUrl}/api/produto/:id`);
  }

  toSave(product: Product) {
    const productBody = {
      nome: product.nome,
      descricao: product.descricao,
      precoCusto: product.precoCusto,
    };

    if (product.id) {
      return this.http.put<Task>(`${environment.baseUrl}/produto/${product.id}`, productBody);
    } else {
      return this.http.post<Task>(`${environment.baseUrl}/produto`, productBody);
    }
  }

  delete(id: string) {
    return this.http.delete(`${environment.baseUrl}/produto/${id}`);
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
}
