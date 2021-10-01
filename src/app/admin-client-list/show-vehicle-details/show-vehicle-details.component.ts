import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-vehicle-details',
  templateUrl: './show-vehicle-details.component.html',
  styleUrls: ['./show-vehicle-details.component.css']
})
export class ShowVehicleDetailsComponent implements OnInit {

  constructor(private service:SharedService) { }

  VehicleList:any=[];
  ngOnInit(): void {
    this.refreshVehicleList();
  }

  refreshVehicleList()
  {
    this.service.getVehicleDetailsList().subscribe(data=>{
      this.VehicleList=data;
    });
  }

}
