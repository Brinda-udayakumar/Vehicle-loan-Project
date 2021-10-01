import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminApprovedListComponent } from './admin-approved-list/admin-approved-list.component';
import { AdminForApprovalListComponent } from './admin-for-approval-list/admin-for-approval-list.component';
import { AdminRejectedListComponent } from './admin-rejected-list/admin-rejected-list.component';
import { AdminClientListComponent } from './admin-client-list/admin-client-list.component';
import { ShowPersonalDetailsComponent } from './admin-client-list/show-personal-details/show-personal-details.component';
import { ShowVehicleDetailsComponent } from './admin-client-list/show-vehicle-details/show-vehicle-details.component';
import { ShowLoanDetailsComponent } from './admin-client-list/show-loan-details/show-loan-details.component';
import { ShowEmpDetailsComponent } from './admin-client-list/show-emp-details/show-emp-details.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'Login',component:LoginComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'AdminApprovedList',component:AdminApprovedListComponent},
  {path:'AdminForApprovalList',component:AdminForApprovalListComponent},
  {path:'AdminRejectedList',component: AdminRejectedListComponent},
  {path:'AdminClientList',component:AdminClientListComponent},

  {path:'ShowPersonalDetails',component:ShowPersonalDetailsComponent},
  {path:'ShowVehicleDetails',component: ShowVehicleDetailsComponent},
  {path:'ShowLoanDetails',component:ShowLoanDetailsComponent },
  {path:'ShowEmpDetails',component:ShowEmpDetailsComponent}

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
