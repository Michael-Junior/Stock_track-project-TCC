import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

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
}
