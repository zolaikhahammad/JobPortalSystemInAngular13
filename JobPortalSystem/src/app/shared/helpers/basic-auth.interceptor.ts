// The Basic Authentication Interceptor intercepts http requests from the application to add basic authentication credentials to the Authorization header if the user is logged in.

// It's implemented using the HttpInterceptor class included in the HttpClientModule, by extending the HttpInterceptor class you can create a custom interceptor to modify http requests before they get sent to the server.

// Http interceptors are added to the request pipeline in the providers section of the app.module.ts file.



import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../services/token-storage.service';
@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private tokenStorageService: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        const token = this.tokenStorageService.getToken();
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer-' + token
                }
            });
        }
        return next.handle(req);
    }
}