import { Component, OnInit,Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstantsComponent } from '../common/global-constants/global-constants.component'; 
import { SharedService } from 'src/app/shared.service';
import { delay } from 'rxjs/operators';
import { MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/material/dialog';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public CustId:number;
  CredentialsList:any=[];
  @Input() credentials:any;
  public username:string;
  public password:string;
  n:any; 
  
  
  
  constructor(private _router:Router,private service:SharedService) { }

  ngOnInit(): void {
   
  }

  userValidation(){
    
    
    var val={EmailId:this.username,
            Password:this.password};
            this.service.LoginCredetials(val)
            .subscribe
              (
              data=>{this.CredentialsList=data;
              console.log([(this.CredentialsList.CustomerId)]); 
              console.log('val',this.CredentialsList);
              if(!this.CredentialsList?.CustomerId){

                alert('Invalid credentials.');
                return;
              }
              
              GlobalConstantsComponent.CustomerIdLoginCredential=this.CredentialsList.CustomerId;   
              this._router.navigateByUrl('/UserDashboard');
  }
              );

              
              //GlobalConstantsComponent.CustomerIdLoginCredential=2;
              //console.log(this.CredentialsList.CustomerId); 
              //this._router.navigateByUrl('/UserDashboard');
    
              /*
    if(this.CredentialsList!=[] && this.CredentialsList!="Invalid Credentials")
    {
     
    this.CustId=this.CredentialsList.CustomerId;    
    GlobalConstantsComponent.CustomerIdLoginCredential=this.CustId;  
    console.log(this.CredentialsList);  
    this._router.navigateByUrl('/UserDashboard');
    }*/
    //this.dummy_func();

  }

  // getLoginCredentials = () => {
  //   return new Promise( (resolve,reject)  =>{

  //   })
  // }
  
  
}
