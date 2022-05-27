import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { isDevMode } from '@angular/core';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule ,ToastContainerModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    LogoutComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
  ]
})
export class AuthenticationModule { }
