import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlConstants } from 'src/app/shared/constants/UrlConstants';
import { HttpgeneralService } from 'src/app/shared/httpgeneral.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: any;
  dataForm: any;
  returnUrl: any;
  constructor(private httpService: HttpgeneralService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])

    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  authenticateUser() {
    const loginUserobj = {
      email: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    this.httpService.post(UrlConstants.signin, JSON.stringify(loginUserobj)).subscribe({
      next: data => {
        this.dataForm = data;
        if (this.dataForm.data.status == "ok") {
          this.tokenStorageService.saveToken(this.dataForm.data.jwtToken.token);
          this.tokenStorageService.saveUser(this.dataForm.data.user);
          this.tokenStorageService.saveUserRole(this.dataForm.data.roles);
          if (this.dataForm.data.user.company == null) {
             this.router.navigate(['/add-employer-info']);
          } else if (this.dataForm.data.user.company != null) {
           // this.router.navigateByUrl(this.returnUrl);
           this.router.navigate(['/employer-dashboard']);
          }
        }
      },
      error: error => {
        if (error.error.data) {
          alert(error.error.data.errormessage);
        }
        if (error.errors.password) {
          alert(error.errors.password[0]);
        }
      }
    });

  }

}
