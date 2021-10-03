import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-constants',
  templateUrl: './global-constants.component.html',
  styleUrls: ['./global-constants.component.css']
})
export class GlobalConstantsComponent implements OnInit {
 
      
  public static CustomerIdLoginCredential: number;

  constructor() { }

  ngOnInit(): void {
  }

}
