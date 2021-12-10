import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/common/services/product/products.service';
import { Product } from 'src/app/product/models/products-model';

@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrls: ['./accounts-payable.component.css']
})
export class AccountsPayableComponent implements OnInit {
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
