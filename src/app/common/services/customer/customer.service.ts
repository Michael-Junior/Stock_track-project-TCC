import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/app/customers/models/customer-model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(httpService: HttpClient) {}

  async getCustomers(): Promise<any> {
    const token = window.localStorage.getItem('token');
    console.log(environment);
  }

  async createCustomer(customer: Customer): Promise<any> {
    const token = window.localStorage.getItem('token');
    console.log(customer);
    console.log(token);
  }

  async updateCustomoer(customer: Customer): Promise<any> {
    const token = window.localStorage.getItem('token');
    console.log('UPDATE CUSTOMER', customer);
    console.log('UPDATE TOKEN', token);
  }
}
