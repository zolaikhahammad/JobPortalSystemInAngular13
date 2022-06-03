import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/shared/constants/UrlConstants';
import { HttpgeneralService } from 'src/app/shared/httpgeneral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {ViewChild, ElementRef } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service'; 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {

  isemployer: boolean;
  iscandidate: boolean;
  constructor(private httpService: HttpgeneralService,public toasterService:ToastService) {
    this.isemployer = true;
    this.iscandidate = false;
  }

  ngOnInit(): void {
  }
  

  GetFormValues(user: any) {
    this.SaveUser(user);
  }

  SaveUser(user: any) {
    debugger;
    const postBody = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      Password: user.Password,
      isEmployer:this.isemployer,
      isCandidate:this.iscandidate
    }
    if(user.isEmployer=="employer"){
      postBody.isEmployer=true;
      postBody.isCandidate=false;
    }
    else {
      postBody.isEmployer=false;
      postBody.isCandidate=true;
    }
    this.httpService.post(UrlConstants.signup, JSON.stringify(postBody)).subscribe({
      next: data => {
        this.toasterService.showSuccess("User registration is successfull","Success");
      },
      error: error => {
        this.toasterService.showError(error,"Error");
      }
    });
  }
}
