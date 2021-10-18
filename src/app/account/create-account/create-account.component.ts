import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf: ''
  }




  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
