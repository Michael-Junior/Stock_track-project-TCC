import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/services/account/shared/products.service';






@Component({
  selector: 'app-saida-produtos',
  templateUrl: './saida-produtos.component.html',
  styleUrls: ['./saida-produtos.component.css'],
})
export class SaidaProdutosComponent implements OnInit {
  constructor(private productService: ProductServices) {}
  products = [
    {
      id: '',
      nome: '',
      descricao: '',
      ativo: false,
      precoCusto: '',
    },
  ];

  ngOnInit(): void {
    /*console.log('CHAMOU FUNCAO');
    this.productsService
      .getOutputProducts()
      .then((responseData) => (this.products = responseData));*/
  }
}
