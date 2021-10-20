import { Component, OnInit } from "@angular/core";

import { Product } from "../../../models/products-model";
import { ProductsService } from "../../../services/product/products.service";

@Component({

    selector: 'app.product_list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class productsListaComponent implements OnInit {
    products: Product[] = [];
    msgError: String = '';

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productsService.getProducts().subscribe(
            products => {
                this.products = products
            },
            error => this.msgError = <any>error
        )


        /*this.products = [
            {   id: '1', nome: 'product ffhdsfkdsfk  dfdsfdsjkhfkjds 2', descricao: 'teste', unidadeMedida: 'UN', ativo: true, custo: 10.0, margemLucro: 10.0, quantidade: 1    },
            {   id: '1', nome: 'product 2', descricao: 'teste', unidadeMedida: 'UN', ativo: true, custo: 10.0, margemLucro: 10.0, quantidade: 1    },
            {   id: '1', nome: 'product 2', descricao: 'teste', unidadeMedida: 'UN', ativo: true, custo: 10.0, margemLucro: 10.0, quantidade: 1    },
            {   id: '1', nome: 'product 2', descricao: 'teste', unidadeMedida: 'UN', ativo: true, custo: 10.0, margemLucro: 10.0, quantidade: 1    },
            {   id: '1', nome: 'product 2', descricao: 'teste', unidadeMedida: 'UN', ativo: true, custo: 10.0, margemLucro: 10.0, quantidade: 1    },
            {   id: '1', nome: 'product 2', descricao: 'teste', unidadeMedida: 'UN', ativo: true, custo: 10.0, margemLucro: 10.0, quantidade: 1    },
        ];*/
    }
}