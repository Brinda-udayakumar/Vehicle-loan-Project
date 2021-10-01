import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp-details',
  templateUrl: './show-emp-details.component.html',
  styleUrls: ['./show-emp-details.component.css']
})
export class ShowEmpDetailsComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmpList:any=[];
  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList()
  {
    this.service.getEmpDetailsList().subscribe(data=>{
      this.EmpList=data;
    });
  }


}
