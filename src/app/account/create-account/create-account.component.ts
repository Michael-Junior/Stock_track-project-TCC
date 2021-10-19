import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  account = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf: '',
  };

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    try {
      const response = await this.accountService.createAccount(this.account);
      console.log(`usuário registrado: ${this.account}`);
      console.log(`Response: ${response}`);
      this.router.navigate(['login']);
    } catch (err) {
      alert(err.error.error || err.error.message);
    }
  }
}
