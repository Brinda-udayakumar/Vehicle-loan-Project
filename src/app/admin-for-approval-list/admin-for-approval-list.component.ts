import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-admin-for-approval-list',
  templateUrl: './admin-for-approval-list.component.html',
  styleUrls: ['./admin-for-approval-list.component.css']
})
export class AdminForApprovalListComponent implements OnInit {
  constructor(private service:SharedService) { }

  LoanForApprovalList:any=[];
  ngOnInit(): void {
    this.refreshLoanForApprovalList();
  }

  refreshLoanForApprovalList()
  {
    this.service.getLoanForApprovalDetailsList().subscribe(data=>{
      this.LoanForApprovalList=data;
    });
  }

}


