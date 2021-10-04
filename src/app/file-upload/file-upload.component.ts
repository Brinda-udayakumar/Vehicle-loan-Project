import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public pageTitle = 'Documents Upload';
  fileForm = new FormGroup({
    altText: new FormControl(''),
    description: new FormControl('')
  });
  fileToUpload: any;

  constructor(private http:  HttpClient) { }

  ngOnInit(): void {
  }
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  aadharCardUpload()
  {
    //debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    return this.http.post('http://localhost:5000/api/AadharCard', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }
  panCardUpload()
  {
    //debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    return this.http.post('http://localhost:5000/api/Pan', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }
  photoUpload()
  {
    //debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    return this.http.post('http://localhost:5000/api/Photo', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }
  salarySlipUpload()
  {
    //debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    return this.http.post('http://localhost:5000/api/SalarySlip', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }
}




