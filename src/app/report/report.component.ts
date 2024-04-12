import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service'; // Update the path
import { Router } from '@angular/router'; // Import Router module

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  startDate: string = ''; // Default empty string
  endDate: string = ''; // Default empty string
  reportType: string = '';
  dailyReports: any[];
  sessionReports: any[];

  constructor(private reportService: ReportService, private router: Router) { } // Inject Router service

  ngOnInit(): void {
    console.log('Report component initialized.');
  }

  submitForm(): void {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    console.log('Report Type:', this.reportType);
    
    if (this.reportType === 'daily') {
      this.getDailyReports();
    } else if (this.reportType === 'session') {
      this.getSessionReports();
    }
    
    // You can add further logic here to handle form submission
  }

  getDailyReports(): void {
    this.reportService.getDailyReportsByDateRange(this.startDate, this.endDate).subscribe(reports => {
      this.dailyReports = reports;
      console.log('Daily Reports:', this.dailyReports);
      // Handle the retrieved daily reports data
    });
  }
  
  getSessionReports(): void {
    this.reportService.getSessionReportsByDateRange(this.startDate, this.endDate).subscribe(reports => {
      this.sessionReports = reports;
      console.log('Session Reports:', this.sessionReports);
      // Handle the retrieved session reports data
    });
  }

  // Function to navigate to single report page based on ID
  viewReport(reportId: string): void {
    console.log("object")
    // Redirect to the single report page (adjust the route as per your application)
    this.router.navigate(['/report', reportId]);
  }
}
