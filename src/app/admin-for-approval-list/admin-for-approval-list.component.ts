import { Component, OnInit ,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-admin-for-approval-list',
  templateUrl: './admin-for-approval-list.component.html',
  styleUrls: ['./admin-for-approval-list.component.css']
})
export class AdminForApprovalListComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() status:any;
  CustomerId:any;
  LoanStatus: any;
  CustId:any;

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
  Approve(CustId: any){
    
    var val={CustomerId:CustId,LoanStatus:"Approved"};
    this.service.updateLoanStatus(val).subscribe(res=>{
      alert(res.toString());
    });

  }
  Reject(CustId: any){
    
    var val={CustomerId:CustId,LoanStatus:"Rejected"};
    this.service.updateLoanStatus(val).subscribe(res=>{
      alert(res.toString());
    });

  }

}


