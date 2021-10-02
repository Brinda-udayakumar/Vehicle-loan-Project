import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getPersonalDetailsList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/PersonalDetails');
  }

  getEmpDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EmploymentDetails');
  }

  getVehicleDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/VehicleDetails');
}

  getLoanDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LoanDetails');
  }
  getLoanRejectedDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LoanRejectedDetails');
  }
  getLoanApprovedDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LoanApprovedDetails');
  }
  getLoanForApprovalDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/LoanForApprovalDetails');
  }
  updateLoanStatus(val:any){
    return this.http.put(this.APIUrl+'/LoanForApprovalDetails',val);
  }
}
