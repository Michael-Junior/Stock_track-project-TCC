import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../common/services/product/products.service';

@Component({
  selector: 'app.products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class productsCadastroComponent implements OnInit {
  constructor(
    private routeUrl: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  pageTitle: string = 'Adicionar Produtos';

  productForm = new FormGroup({
    nome: new FormControl(),
    descricao: new FormControl(),
    margemLucro: new FormControl(),
    status: new FormControl(),
  });

  redirectToProducts() {
    this.router.navigate(['product-registration']);
  }

  async onSubmit() {
    const id = this.routeUrl.snapshot.params.id;
    if (!id) {
      await this.productsService.createProduct(this.productForm.value);
    } else {
      const product = { ...this.productForm.value, id: id };
      await this.productsService.updateProduct(product);
    }
    this.redirectToProducts();
  }

  ngOnInit(): void {}
}
