import { Component, OnInit } from '@angular/core';
import { Vendor } from '../models/vendor-model';
import { VendorService } from 'src/app/common/services/vendor/vendor.service';

@Component({
  selector: 'app-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  // vendors: Vendor[];
  vendors: Vendor[] = [
    {
      id: '12345',
      nome: 'Gustavo S/A',
      cnpj: '12345',
      endereco: 'Rua Palestra Itália, 200',
    },
    {
      id: '12345',
      nome: 'Gabriel S/A',
      cnpj: '12345',
      endereco: 'Rua Palestra Itália, 200',
    },
  ];
  constructor(vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendors = this.vendors;
  }
}
