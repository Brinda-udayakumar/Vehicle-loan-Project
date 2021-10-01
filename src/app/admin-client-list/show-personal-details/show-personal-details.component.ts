import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-personal-details',
  templateUrl: './show-personal-details.component.html',
  styleUrls: ['./show-personal-details.component.css']
})

export class ShowPersonalDetailsComponent implements OnInit {

  constructor(private service:SharedService) { }

  PersonalList:any=[];
  ngOnInit(): void {
    this.refreshPersonalList();
  }

  refreshPersonalList()
  {
    this.service.getPersonalDetailsList().subscribe(data=>{
      this.PersonalList=data;
    });
  }
}
