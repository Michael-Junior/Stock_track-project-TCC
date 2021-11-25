import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../common/services/report/reports.service';
import { Report } from '../models/reports-model';

@Component({
  selector: 'app.report_list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class reportsListaComponent implements OnInit {
  reports: Report[] = [];
  msgError: String = '';

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.reportsService.getReports().subscribe(
      (reports) => {
        this.reports = reports;
      },
      (error) => (this.msgError = <any>error)
    );
  }
}
