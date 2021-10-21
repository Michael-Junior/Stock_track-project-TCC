import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { ProductServices } from "src/app/services/account/shared/products.service";
import { Product } from "../../../models/products-model";


@Component({

    selector: 'app.product_list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class productsListaComponent implements OnInit {
    products: Product[] = [];
    msgError: String = '';

    //@Input()
    //product: Product;

    @Output()
    onDeleteProduct = new EventEmitter


    constructor(private productsService: ProductServices) { }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.productsService.getAll().subscribe(
            products => {
                this.products = products
            },
            error => this.msgError = <any>error
        )
    }


    remove(product: Product){
        this.productsService.delete(product.id).subscribe(() => {
            this.onDeleteProduct.emit(product);
            
        })
    }
}