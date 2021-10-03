import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loan-offers',
  templateUrl: './loan-offers.component.html',
  styleUrls: ['./loan-offers.component.css']
})
export class LoanOffersComponent implements OnInit {

  
  Amount=100000;
  Months=6;
  Interest=8;
  EMI=0;
  disp:boolean=false;

  constructor(private _router : Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onChangeAmount(event:any){
    this.Amount=event.value;
    console.log(event);
  }
  onChangeYear(event:any){
    this.Months=event.value;
    console.log(event);
  }
  onChangeInterest(event:any){
    this.Interest=event.value;
    console.log(event);
  }
  OnSubmit(){

    let newInterest=this.Interest/(12*100);
    let uphalf= Math.pow((1+newInterest),this.Months);
    let downhalf = Math.pow((1+newInterest),this.Months) - 1;
    let div= uphalf/downhalf;
    this.EMI = Math.round(this.Amount * newInterest * div);
    this.disp=true;
  }
  RedirectPage(){
    let data:any={
      Amount:this.Amount,
      Months:this.Months,
      Interest:this.Interest
    }
    console.log(data);
    this._router.navigate(['/ApplicationForm'],
    {queryParams:{data:JSON.stringify(data)}}
    );

  }


}
