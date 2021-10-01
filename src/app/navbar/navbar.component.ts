import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmiCalculatorComponent } from '../emi-calculator/emi-calculator.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog:MatDialog) { }



  ngOnInit(): void {
  }

  calculateEMI()
  {
    this.dialog.open(EmiCalculatorComponent);
  }
}
