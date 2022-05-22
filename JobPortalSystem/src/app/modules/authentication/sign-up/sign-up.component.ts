import { Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/shared/constants/UrlConstants';
import { HttpgeneralService } from 'src/app/shared/httpgeneral.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  isemployer: boolean;
  iscandidate: boolean;
  constructor(private httpService: HttpgeneralService) {
    this.isemployer = true;
    this.iscandidate = false;
  }

  ngOnInit(): void {
  }

  GetFormValues(user: any) {
    this.SaveUser(user);
  }

  checkCheckBoxvalue(event: any) {
    if (event === "candidate"){
      this.isemployer = false;
      this.iscandidate=true;
    }
    else  
      this.iscandidate=false;
      this.isemployer=true;
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
    this.httpService.post(UrlConstants.signup, JSON.stringify(postBody)).subscribe({
      next: data => {
      },
      error: error => {
      }
    });
  }
}
