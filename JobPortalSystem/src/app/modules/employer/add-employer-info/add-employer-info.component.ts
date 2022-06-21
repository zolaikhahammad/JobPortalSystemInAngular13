import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UrlConstants } from 'src/app/shared/constants/UrlConstants';
import { HttpgeneralService } from 'src/app/shared/httpgeneral.service';
import { EmployeeStrength } from 'src/app/shared/model/EmployeeStrengthModel';
import { Industries } from 'src/app/shared/model/IndustryModel';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import {NgbDatepicker, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-employer-info',
  templateUrl: './add-employer-info.component.html',
  styles: [
  ]
})
export class AddEmployerInfoComponent implements OnInit {
  public industries!: Industries[];
  public employeeStrength !: EmployeeStrength[];
  empInfoForm: any;
  userInfo: any;
  constructor(private httpservice: HttpgeneralService,
    private tokenStorageService: TokenStorageService,
    public toasterService:ToastService,
    private calendar: NgbCalendar) {


  }

  ngOnInit(): void {
    debugger;
    this.userInfo = this.tokenStorageService.getUser();
    this.empInfoForm = new FormGroup({
      companyName: new FormControl("",[Validators.required]),
      userId: new FormControl(this.userInfo.userId),
      groupOfCompanies: new FormControl("",[Validators.required]),
      companyWebsite: new FormControl(),
      ceoName: new FormControl("",[Validators.required]),
      ceoCnic: new FormControl(),
      cnicIssuanceDate: new FormControl(new Date(),[Validators.required]),
      industryId: new FormControl("",[Validators.required]),
      companyAddress: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required]),
      employeeStrenghtId: new FormControl("",[Validators.required]),
      companyDescription: new FormControl("",[Validators.required]),
      companyLogoUrl: new FormControl(),
      isAddressPublic: new FormControl(true, Validators.required)

    });
    this.getDropdownValues();
  }

  SaveEmpInfo() {
    console.log(this.empInfoForm.value);
    this.httpservice.post(UrlConstants.save_emp_info, JSON.stringify(this.empInfoForm.value)).subscribe({
      next: data => {
        this.toasterService.showSuccess("employer information saved","Success");
      },
      error: error => {
        this.toasterService.showError(error,"Error");
      }

    });
  }
  getDropdownValues() {
    debugger;
    this.httpservice.get(UrlConstants.get_industries).subscribe((data: any) => {
      console.log(data);
      if (data.data.status == "ok") {
        this.industries = data.data.industriesList;
      }
    });
    this.httpservice.get(UrlConstants.get_emp_strength).subscribe((data: any) => {
      console.log(data);
      if (data.data.status == "ok") {
        this.employeeStrength = data.data.employeeStrengthsList;
      }
    });
  }

}
