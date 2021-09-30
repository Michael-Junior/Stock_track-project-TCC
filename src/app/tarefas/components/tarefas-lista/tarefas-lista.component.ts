import { Component, OnInit } from "@angular/core";

@Component({

    selector: 'app.tarefas-lista',
    templateUrl: './tarefas-lista.component.html',
    styleUrls: ['./tarefas-lista.component.css']
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