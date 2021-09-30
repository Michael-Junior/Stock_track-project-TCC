import { Component, OnInit } from "@angular/core";

@Component({

    selector: 'app.product_list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class TarefasListaComponent implements OnInit {


    tarefas: any[] = [];

    constructor() { }

    ngOnInit() {
        this.obterTarefas();
    }

    obterTarefas() {
        this.tarefas = [
            {   nome: 'tarefa 1'    },
            {   nome: 'tarefa 2'    }
        ];
    }
}