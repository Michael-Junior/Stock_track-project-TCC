import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/account/shared/products.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { OutputProduct } from 'src/app/source_modules/models/outputProduct.model';

@Component({
  selector: 'app-registrar-saida',
  templateUrl: './registrar-saida.component.html',
  styleUrls: ['./registrar-saida.component.css'],
})
export class RegistrarSaidaComponent implements OnInit {
  outputProductForm = new FormGroup({
    nome: new FormControl(),
    lote: new FormControl(),
    quantidade: new FormControl(),
    precoVenda: new FormControl(),
  });

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.productService.postOutputProduct(
      this.outputProductForm.value
    );
    console.log(response);
    this.router.navigate(['saida-produtos']);
  }
}
