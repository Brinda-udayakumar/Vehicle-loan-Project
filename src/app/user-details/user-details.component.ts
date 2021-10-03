import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { GlobalConstantsComponent } from '../common/global-constants/global-constants.component';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private service:SharedService) { }
  id:any=GlobalConstantsComponent.CustomerIdLoginCredential;
  UserLoanDetailsList:any=[];
  ngOnInit(): void {
    this. refreshUserLoanDetailsList();
  }

  refreshUserLoanDetailsList()
  {
    this.service.getUserLoanDetailsList(this.id).subscribe(data=>{
      this.UserLoanDetailsList=data;
    });
  }
}
