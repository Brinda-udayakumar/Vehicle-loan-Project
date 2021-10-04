import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AdminApprovedListComponent } from './admin-approved-list/admin-approved-list.component';
import { AdminForApprovalListComponent } from './admin-for-approval-list/admin-for-approval-list.component';
import { AdminRejectedListComponent } from './admin-rejected-list/admin-rejected-list.component';
import { AdminClientListComponent } from './admin-client-list/admin-client-list.component';
import { AddComponent } from './admin-client-list/add/add.component';
import { SharedService } from './shared.service';
import {MatTabsModule} from '@angular/material/tabs';

import { HttpClientModule } from '@angular/common/http';
import { ShowPersonalDetailsComponent } from './admin-client-list/show-personal-details/show-personal-details.component';
import { ShowVehicleDetailsComponent } from './admin-client-list/show-vehicle-details/show-vehicle-details.component';
import { ShowLoanDetailsComponent } from './admin-client-list/show-loan-details/show-loan-details.component';
import { ShowEmpDetailsComponent } from './admin-client-list/show-emp-details/show-emp-details.component';
import { GetEligibleComponent } from './get-eligible/get-eligible.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { CompleteApplicationFormComponent } from './complete-application-form/complete-application-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { CommonComponent } from './common/common.component';
import { GlobalConstantsComponent } from './common/global-constants/global-constants.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPersonaldetailsComponent } from './user-personaldetails/user-personaldetails.component';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    EmiCalculatorComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminApprovedListComponent,
    AdminForApprovalListComponent,
    AdminRejectedListComponent,
    AdminClientListComponent,
    AddComponent,
    ShowPersonalDetailsComponent,
    ShowVehicleDetailsComponent,
    ShowLoanDetailsComponent,
    ShowEmpDetailsComponent,
    GetEligibleComponent,
    LoanOffersComponent,
    CompleteApplicationFormComponent,
    CommonComponent,
    GlobalConstantsComponent,
    UserLoginComponent,
    UserDashboardComponent,
    UserDetailsComponent,
    UserPersonaldetailsComponent,
    FileUploadComponent,
    
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,ReactiveFormsModule,MatMenuModule,MatSliderModule,MatSidenavModule,MatDividerModule,
    HttpClientModule,MatTabsModule,MatStepperModule,MatRadioModule,MatListModule


   
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[EmiCalculatorComponent]
})
export class AppModule { }
