import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-single-report',
  templateUrl: './single-report.component.html',
  styleUrls: ['./single-report.component.css']
})
export class SingleReportComponent implements OnInit {
  reportId: string;
  report: any;

  
  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    // Get the report ID from the route parameters
    this.route.params.subscribe(params => {
      this.reportId = params['id'];
      
      // Fetch the report details by ID
      this.getReportById(this.reportId);
    });
  }
  
  // Method to fetch report details by ID
  getReportById(reportId: string): void {
    this.reportService.getSessionReportById(reportId).subscribe(report => {
      this.report = report;
      console.log(this.report)
    });
  }
  // chartData1 = {
  //   title: 'Perfect vs Unperfect Counts',
  //   seriesName: 'Count',
  //   data: [
  //     { value: this.report.perfectCount, name: 'Perfect' },
  //     { value: this.report.unperfectCount, name: 'Unperfect' }
  //   ]
  // };
  
  // chartData2 = {
  //   title: 'Counts of Without Cap, Label, Both',
  //   seriesName: 'Count',
  //   data: [
  //     { value: this.report.withoutCapCount, name: 'Without Cap' },
  //     { value: this.report.withoutLabelCount, name: 'Without Label' },
  //     { value: this.report.withoutBothCount, name: 'Without Both' }
  //   ]
  // };
}
