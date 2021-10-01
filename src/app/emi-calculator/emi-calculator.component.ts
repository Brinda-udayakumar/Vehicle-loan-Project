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
    let uphalf= Math.pow((1+this.interest),this.tenure);
    let downhalf = Math.pow((1+this.interest),this.tenure) - 1;
    let div= uphalf/downhalf;
    this.result = this.amount * this.interest * div;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
