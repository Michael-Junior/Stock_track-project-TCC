import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/shared/account.service';
import { ProductService } from '../account/shared/products.service';

@Component({
  selector: 'app-saida-produtos',
  templateUrl: './saida-produtos.component.html',
  styleUrls: ['./saida-produtos.component.css'],
})
export class SaidaProdutosComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products = [
    {
      id: '',
      nome: '',
      lote: '',
      quantidade: '',
      precoVenda: '',
    },
  ];

  ngOnInit(): void {
    this.productService
      .getOutputProducts()
      .then((responseData) => (this.products = responseData));
  }
}
