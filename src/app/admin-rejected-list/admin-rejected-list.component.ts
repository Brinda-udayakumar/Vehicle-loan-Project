import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-rejected-list',
  templateUrl: './admin-rejected-list.component.html',
  styleUrls: ['./admin-rejected-list.component.css']
})
export class AdminRejectedListComponent implements OnInit {
  constructor(private service:SharedService) { }

  LoanRejectedList:any=[];
  ngOnInit(): void {
    this.refreshLoanRejectedList();
  }

  refreshLoanRejectedList()
  {
    this.service.getLoanRejectedDetailsList().subscribe(data=>{
      this.LoanRejectedList=data;
    });
  }

}

