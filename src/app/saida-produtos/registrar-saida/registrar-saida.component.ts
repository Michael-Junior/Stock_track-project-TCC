import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-saida',
  templateUrl: './registrar-saida.component.html',
  styleUrls: ['./registrar-saida.component.css'],
})
export class RegistrarSaidaComponent implements OnInit {
  product = {
    nome: '',
    lote: '',
    quantidade: '',
    preco: '',
    unidade: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.product);
  }
}
