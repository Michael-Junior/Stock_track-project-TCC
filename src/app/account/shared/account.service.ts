import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {

    //this.http.post<any>(`${environment.baseUrl}/auth/login´, user);subscribe()

    const result = await this.http.post<any>(`${environment.baseUrl}/auth/login`, user).toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true
    }
    return false;
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
