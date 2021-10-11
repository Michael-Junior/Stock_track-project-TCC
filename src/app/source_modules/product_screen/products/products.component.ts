import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../../models/products-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app.products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class productsCadastroComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  pageTitle: string = 'Adicionar Produtos';
  formMode: string = '';
  productForm: any;
  product: Product = {
    id: '',
    nome: '',
    detalhes: '',
    concluido: false
  };
  validationMessages: { [Key: string]: { [key: string]: string } };
  private subscription: Subscription = new Subscription;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {
    this.validationMessages = {
      nome: {
        required: 'Nome é obrigatório',
        minlength: 'A descrição do produto deve ter no minimo 3 caracteres',
        maxlength: 'A descrição do produto não deve exceder 100 caracteres',
      },
      detalhes: {
        minlength: 'A descrição do produto deve ter no minimo 3 caracteres',
        maxlength: 'A descrição do produto não deve exceder 100 caracteres',
      }
    }
  }

  ngOnInit() {
    this.formMode = 'new';
    this.productForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      detalhes: ['', [Validators.min(3), Validators.maxLength(500)]],
    });

    this.subscription = this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        const name = params.get('nome');

        if (id == null || id == '') {
          const product: Product = { id: '', nome: '', detalhes: '', concluido: false };
          this.showProduct(product);
        } else { this.getProduct(id) }
      }
    )
  }

  ngOnDestroy(): void {
  }

  getProduct(id: string): void {
    this.productsService.getProduct(id).subscribe(
      (product: any) => this.showProduct(product),
      (error: any) => this.errorMessage = <any>error
    )
  }

  showProduct(product: Product): void {

    if (this.productForm) {
      this.productForm.reset();
    }

    this.product = product;

    if (this.product.id == '') {
      this.pageTitle = 'Adicionar Produto';
    } else {
      this.pageTitle = `Editar Produto: ${this.product.nome}`;
    }

    this.productForm.patchValue({ //alterar valores do formulário
      nome: this.product.nome,
      detalhes: this.product.detalhes,
    });
  }

  deleteProduct(): void {
    if (this.product.id == '') {
      this.onSaveComplete();
    } else {
      if (confirm(`Tem certeza que deseja excluir o produto: ${this.product.nome}?`)) {
        this.productsService.deleteProduct(this.product.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  toSave(): void {

    if (this.productForm.valid) {
      if (this.productForm.dirty) { //Se o formulário tiver sido alterado
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === '') {
          this.productsService.createProduct(p)  //POST
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        } else {
          this.productsService.updateProduct(p) //PUT
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => this.errorMessage = <any>error
            );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Por favor corrija os erros de validação ';
    }
  }

  onSaveComplete(): void {
    this.productForm.reset();
    this.router.navigate(['/product']);
  }
}