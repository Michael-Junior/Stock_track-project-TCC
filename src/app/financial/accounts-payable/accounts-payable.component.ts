import { Component, OnInit } from '@angular/core';
import { FinancialServicePagar } from 'src/app/common/services/financial/financialPagar.service';


@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrls: ['./accounts-payable.component.css']
})
export class AccountsPayableComponent implements OnInit {

  constructor(private financialService:  FinancialServicePagar) {}

  financialPagar = [
    {
      id: '',
      numeroPedido: '',
      valor: 0,
      nomeFornecedor: '',
      cnpjFornecedor: '',
      enderecoFornecedor: '',
      telefoneFornecedor: '',
      vencimento: '',
      status: '',
    }
  ]

  ngOnInit(): void {
    this.financialService
    .getFinancialPagar()
    .then((responseData) => (this.financialPagar = responseData));

  }
}