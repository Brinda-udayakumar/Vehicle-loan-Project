import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public username:any;
  public password:any;
  public result:any;
  hide = true;


  adminValidation(){
    let uname= "admin";
    let pword = "12345";
    var temp=uname.localeCompare(this.username);  
    var temp1=pword.localeCompare(this.password); 
    this.result=0; 
    if(temp==0 && temp1==0)
    {
      this.result=1;
      this._router.navigateByUrl('/AdminDashboard');
    }
    else{
      console.log("Not Matching" );
    }


  }

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

}
