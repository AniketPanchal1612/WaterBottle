import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelppComponent } from './helpp/helpp.component';
import { SingleReportComponent } from './single-report/single-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to welcome page by default
  { path: 'signup', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'report', component : ReportComponent },
      { path : 'help', component: HelppComponent},
      {path:'report/:id',component:SingleReportComponent}
      // Add other routes as needed
    ]}
  ];
// const routes: Routes = [
//   {
//     path: '',
//     component: SidebarComponent,
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'report', component: ReportComponent}
//     ]}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
