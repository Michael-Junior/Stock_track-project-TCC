import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../common/services/product/products.service';
import { Product } from '../models/products-model';

@Component({
  selector: 'app.products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class productsCadastroComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  pageTitle: string = 'Adicionar Produtos';
  formMode: string = '';
  productForm!: FormGroup;
  product!: Product;

  validationMessages: { [Key: string]: { [key: string]: string } };
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
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
      descricao: {
        minlength: 'A descrição do produto deve ter no minimo 3 caracteres',
        maxlength: 'A descrição do produto não deve exceder 100 caracteres',
      },
      precoCusto: {
        required: 'O valor é obrigatório',
      },
    };
  }

  ngOnInit() {
    this.formMode = 'new';
    this.productForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      descricao: ['', [Validators.min(3), Validators.maxLength(500)]],
      precoCusto: ['', [Validators.required]],
      status: [''],
    });

    this.subscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      const name = params.get('nome');

      if (id == null || id == '') {
        const product: Product = {
          id: '',
          nome: '',
          descricao: '',
          quantidade: 0,
          ativo: true,
          precoCusto: 0,
          margemLucro: 1,
          status: '',
        };
        this.showProduct(product);
      } else {
        this.getProduct(id);
      }
    });
  }

  ngOnDestroy(): void {}

  getProduct(id: string): void {
    this.productsService.getProduct(id).subscribe(
      (product: any) => this.showProduct(product),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  showProduct(product: Product): void {
    if (this.productForm) {
      this.productForm.reset();
    }

    this.product = product;

    if (this.product.id == '') {
      this.pageTitle = 'Adicionar Produtos';
    } else {
      this.pageTitle = `Alteração do Produto: ${this.product.nome}`;
    }

    this.productForm.patchValue({
      //alterar valores do formulário
      nome: this.product.nome,
      descricao: this.product.descricao,
      ativo: this.product.ativo,
      precoCusto: this.product.precoCusto,
    });
  }

  /*deleteProduct(): void {
    if (this.product.id == '') {
      this.onSaveComplete();
    } else {
      if (
        confirm(
          `Tem certeza que deseja excluir o produto: ${this.product.nome}?`
        )
      ) {
        this.productsService.deleteProduct(this.product.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }*/

  toSave(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        //Se o formulário tiver sido alterado
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === '') {
          this.productsService
            .createProduct(p) //POST
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => (this.errorMessage = <any>error)
            );
        } else {
          this.productsService
            .updateProduct(p) //PUT
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => (this.errorMessage = <any>error)
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
    this.router.navigate(['/product-registration']);
  }
}
