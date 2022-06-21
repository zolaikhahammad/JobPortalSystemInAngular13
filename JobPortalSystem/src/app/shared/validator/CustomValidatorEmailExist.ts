import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { UrlConstants } from "../constants/UrlConstants";
import { HttpgeneralService } from "../httpgeneral.service";
import { Observable, of } from 'rxjs';
import { map, debounceTime, take, switchMap } from "rxjs/operators";
import { HttpParams } from "@angular/common/http";
export  class CustomEmailValidator {
    constructor(public httpservice:HttpgeneralService){

    }

    isEmptyInputValue(value: any): boolean {
        // we don't checkutV for string here so it also works with arrays
        return value === null || value.length === 0;
      }
      
      
      existingEmailValidator(initialEmail: string = ""): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors> => {
          let bReturn: boolean = true;
          let err: ValidationErrors= { 'exists': false };;
          let queryParams = new HttpParams();
          queryParams=queryParams.set("email", control.value);
          this.httpservice.get(UrlConstants.signedup,queryParams).subscribe((data: any) => {
            console.log(data);
            if (data.data.status == "ok") {
              if(data.data.email_exist){
                err= { 'exists': false };
              }else{
                err= { 'exists': true };
              }
            }
          });
          return bReturn ? of(err) : of(err);
      };
    }
  }
      

     