import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn!:boolean;
  userRole!:string;
  constructor(private tokenStorageService:TokenStorageService ,
    private ref: ChangeDetectorRef) { 
      this.ref.markForCheck();
    }

  ngOnInit(): void {
    this.isUserLoggedIn=this.tokenStorageService.getToken()!=null?true:false;
    if(this.isUserLoggedIn){
      this.userRole=this.tokenStorageService.getUserRole()[0].role_code;
      console.log(this.userRole);
    }
  }

}
