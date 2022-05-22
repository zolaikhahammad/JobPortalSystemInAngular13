import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './modules/authentication/logout/logout.component';
import { SignInComponent } from './modules/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './modules/authentication/sign-up/sign-up.component';
import { AddEmployerInfoComponent } from './modules/employer/add-employer-info/add-employer-info.component';
import { EmployerDashboardComponent } from './modules/employer/employer-dashboard/employer-dashboard.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { AuthGuard } from './shared/helpers/auth.guard';

const routes: Routes = [
  {
    component: SignUpComponent,
    path: "signup",

  },
  {
    component: SignInComponent,
    path: "signin"
  },
  {
    component: AddEmployerInfoComponent,
    path: "add-employer-info",
    canActivate: [AuthGuard]
  },
  {
    component: EmployerDashboardComponent,
    path: "employer-dashboard",
    canActivate: [AuthGuard]
  },
  {
    component: LogoutComponent,
    path: "logout",
    canActivate: [AuthGuard]
  },
  {
    component: HomeComponent,
    path: "",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
