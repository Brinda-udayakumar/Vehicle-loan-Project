import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-approved-list',
  templateUrl: './admin-approved-list.component.html',
  styleUrls: ['./admin-approved-list.component.css']
})
export class AdminApprovedListComponent implements OnInit {
  constructor(private service:SharedService) { }

  LoanApprovedList:any=[];
  ngOnInit(): void {
    this.refreshLoanApprovedList();
  }

  refreshLoanApprovedList()
  {
    this.service.getLoanApprovedDetailsList().subscribe(data=>{
      this.LoanApprovedList=data;
    });
  }

}
