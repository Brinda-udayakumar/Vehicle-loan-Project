import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { GlobalConstantsComponent } from '../common/global-constants/global-constants.component';
@Component({
  selector: 'app-user-personaldetails',
  templateUrl: './user-personaldetails.component.html',
  styleUrls: ['./user-personaldetails.component.css']
})
export class UserPersonaldetailsComponent implements OnInit {

  constructor(private service:SharedService) { }
  UserPersonalDetailsList:any=[];
  id:any=GlobalConstantsComponent.CustomerIdLoginCredential;
  ngOnInit(): void {
    this.refreshUserPersonalDetailsList();
  }

  refreshUserPersonalDetailsList()
  {
    this.service.getUserPersonalDetailsList(this.id).subscribe(data=>{
      this.UserPersonalDetailsList=data;
    });
  }
}
