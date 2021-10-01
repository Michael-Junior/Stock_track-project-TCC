import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

import { Tarefa } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private urlApi = 'http://localhost:5000/api/tarefas';
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  obterTerafas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.urlApi)
      .pipe(
      catchError(this.tratarErro));
  }

  obterTerafa(id: string) {

  }

  criarTarefa(tarefa: Tarefa) {

  }

  atualizarTarefa(tarefa: Tarefa) {

  }

  excluirTarefa(id: string) {

  }

  private tratarErro(err: any) {
    let msgErro: string;

    if (err.error instanceof ErrorEvent) {
      msgErro = `Ocorreu um erro: ${err.error.message}`;
    }
    else {
      msgErro = `Ocorreu um erro na API. StatusCode: ${err.status}, Desc.: ${err.body.error}`;
    }
    return throwError(msgErro);
  }

}
