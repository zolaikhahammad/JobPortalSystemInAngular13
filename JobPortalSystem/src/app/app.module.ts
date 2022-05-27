import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpgeneralService } from './shared/httpgeneral.service';
import { EmployerModule } from './modules/employer/employer.module';
import { BasicAuthInterceptor } from './shared/helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthenticationModule,
    FormsModule,
    HttpClientModule,
    EmployerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers:
    [HttpgeneralService,
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
