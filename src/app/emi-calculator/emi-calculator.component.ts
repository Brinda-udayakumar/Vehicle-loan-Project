import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  public amount:any;
  public interest:any;
  public tenure:any;
  public result:any;

  emiCalc(){
    let newInterest=this.interest/(12*100);
    let uphalf= Math.pow((1+newInterest),this.tenure);
    let downhalf = Math.pow((1+newInterest),this.tenure) - 1;
    let div= uphalf/downhalf;
    this.result = Math.round(this.amount * newInterest * div);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
