import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-eligible',
  templateUrl: './get-eligible.component.html',
  styleUrls: ['./get-eligible.component.css']
})
export class GetEligibleComponent implements OnInit {
  alert:boolean=false;
  Name:string='';
  Age:number=0;
  Gender:string='';
  TypeOfEmployement:string='';
  YearSalary:number=0;
  ExistingEMI:number=0;
  Mobile:number=0;
  Email:string='';
  AckMsg:string='';
  Result:string='';
  EmploymentType=['Salaried Individual','Self-Employed Individual and Professional (Sole Proprietorship)','Self-Employed Individual and Professional (Patnership Firms)','Self-Employed Individual and Professional (Private Limited Companies)','Self-Employed Individual and Professional (Public Limited Companies)'];

  constructor(private _router : Router) { }
  public result:any;
  ngOnInit(): void {
  }
  onFormSubmit(){
    var DetailsObject={
      CustomerID:0,
      Name:this.Name.trim(),
      Age:this.Age,
      Gender:this.Gender.trim(),
      TypeOfEmployement: this.TypeOfEmployement.trim(),
      YearSalary: this.YearSalary,
      ExistingEMI:this.ExistingEMI,
      Mobile:this.Mobile,
      Email:this.Email.trim()

    }
    this.result=0;
    if(this.TypeOfEmployement==="Salaried Individual" || this.TypeOfEmployement==="Self-Employed Individual and Professional (Sole Proprietorship)"){
      if(this.YearSalary>=300000 && this.Age>=21){
        this.result=1;
        this._router.navigateByUrl('/LoanOffers');
      }
    }
    else if(this.TypeOfEmployement==="Self-Employed Individual and Professional (Public Limited Companies)" || this.TypeOfEmployement==="Self-Employed Individual and Professional (Partnership Firms)" || this.TypeOfEmployement==="Self-Employed Individual and Professional (Public Limited Companies)"){
      if(this.YearSalary>=300000){
        this.result=1;
        this._router.navigateByUrl('/LoanOffers');
      }
    }
   
  }
  
  }





