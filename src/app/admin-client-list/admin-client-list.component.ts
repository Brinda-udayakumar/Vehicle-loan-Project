import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-client-list',
  templateUrl: './admin-client-list.component.html',
  styleUrls: ['./admin-client-list.component.css']
})
export class AdminClientListComponent implements OnInit {

  page: string = "personalDetails";

  constructor() { }

  ngOnInit(): void {
  }

  togglePage = (pageName: string) =>{
    this.page = pageName;
  }

}
