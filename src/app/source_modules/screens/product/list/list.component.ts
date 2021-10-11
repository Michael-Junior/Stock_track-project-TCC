import { Component, OnInit } from "@angular/core";

import { Product } from "src/app/source_modules/models/products-model";
import { ProductsService } from "src/app/source_modules/services/products.service";

@Component({

    selector: 'app.product_list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ListComponent implements OnInit {
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
            {   nome: 'product 1'    },
            {   nome: 'product 2'    },
            {   nome: 'product 3'    },
            {   nome: 'product 4'    },
            {   nome: 'product 5'    },
            {   nome: 'product 6'    },
            {   nome: 'product 7'    },
            {   nome: 'product 8'    },
            {   nome: 'product 9'    },
            {   nome: 'product 10'    },
            {   nome: 'product 11'    },
            {   nome: 'product 12'    },
            {   nome: 'product 13'    },
            {   nome: 'product 14'    },
            {   nome: 'product 15'    },
        ];*/
    }
}