import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { UrlConstants } from 'src/app/shared/constants/UrlConstants';
import { HttpgeneralService } from 'src/app/shared/httpgeneral.service';
import { EmployeeStrength } from 'src/app/shared/model/EmployeeStrengthModel';
import { Industries } from 'src/app/shared/model/IndustryModel';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styles: [
  ]
})
export class EmployerDashboardComponent implements OnInit {
  company:any;
  industryName!:string;
  employeeStrenghtName!:string;
  constructor(private tokenStroageService:TokenStorageService,
    private httpservice:HttpgeneralService) { }

  ngOnInit(): void {
    debugger;
    this.company=this.tokenStroageService.getUserCompany();
    this.getDropdownValues(this.company.industryId,this.company.employeeStrenghtId);   
    console.log(this.company);
  }
  getDropdownValues(industryId:number,empstrengthId:number) {
    let queryParams = new HttpParams();
   queryParams=queryParams.set("Id", industryId);
    this.httpservice.get(UrlConstants.get_industries,queryParams).subscribe((data: any) => {
      console.log(data);
      if (data.data.status == "ok") {
        this.industryName = data.data.industry.industryName;
      }
    });
    queryParams = new HttpParams();
    queryParams=queryParams.set("Id", empstrengthId);
    this.httpservice.get(UrlConstants.get_emp_strength,queryParams).subscribe((data: any) => {
      console.log(data);
      if (data.data.status == "ok") {
        this.employeeStrenghtName = data.data.employeeStrength.employeeStrenghtName;
      }
    });
  }

}
