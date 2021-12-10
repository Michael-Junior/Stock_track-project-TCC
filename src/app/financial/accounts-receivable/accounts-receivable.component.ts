import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/common/services/product/products.service';
import { Product } from 'src/app/product/models/products-model';

@Component({
  selector: 'app-accounts-receivable',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.css']
})
export class AccountsReceivableComponent implements OnInit {
  products: Product[] = [];
  msgError: String = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => (this.msgError = <any>error)
    );
  }
}
