import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer-model';
import { CustomerService } from 'src/app/common/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(customerService: CustomerService) {}

  customers: Customer[] = [
    {
      id: '12345',
      nome: 'Gustavo Cliente S/A',
      cnpj: '12345',
      endereco: 'Rua Palestra Itália, 200',
    },
    {
      id: '12345',
      nome: 'Gabriel Cliente S/A',
      cnpj: '12345',
      endereco: 'Rua Palestra Itália, 200',
    },
  ];

  ngOnInit(): void {
    this.customers = this.customers;
  }
}
