import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-loan-details',
  templateUrl: './show-loan-details.component.html',
  styleUrls: ['./show-loan-details.component.css']
})
export class ShowLoanDetailsComponent implements OnInit {
  constructor(private service:SharedService) { }

  LoanList:any=[];
  ngOnInit(): void {
    this.refreshLoanList();
  }

  refreshLoanList()
  {
    this.service.getLoanDetailsList().subscribe(data=>{
      this.LoanList=data;
    });
  }

}
