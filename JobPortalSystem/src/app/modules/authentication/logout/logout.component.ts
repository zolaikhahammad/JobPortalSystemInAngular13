import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private token:TokenStorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.token.signout();
    this.router.navigate(["/signin"]);
  }

}
