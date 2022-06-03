import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployerInfoComponent } from './add-employer-info/add-employer-info.component';
import { AuthGuard } from 'src/app/shared/helpers/auth.guard';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
;
@NgModule({
  declarations: [AddEmployerInfoComponent, EmployerDashboardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthGuard],
})
export class EmployerModule { }
