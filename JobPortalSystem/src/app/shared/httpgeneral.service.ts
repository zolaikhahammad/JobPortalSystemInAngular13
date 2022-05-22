import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpgeneralService {

  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.apiRoute;
  }

  post(apiRoute: string, body: any) {
    debugger;
    return this.http.post(this.url + apiRoute, body,{headers: this.getHttpHeaders()});
  }

  get(apiRoute: string, routerParams?: HttpParams) {
    return this.http.get(this.url + apiRoute, {headers: this.getHttpHeaders(),params:routerParams }).pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   );
  }

  put(apiRoute: string, body: any) {
    return this.http.put(this.url + apiRoute, body, { headers: this.getHttpHeaders() });
  }

  delete(apiRoute: string) {
    return this.http.delete(this.url + apiRoute, { headers: this.getHttpHeaders() });
  }

  getHttpHeaders(): HttpHeaders {
    return  new HttpHeaders().set("Content-Type", "application/json; charset=utf8")
  }
  private setParameter(routerParams: Params): HttpParams {
    let queryParams = new HttpParams();
    for (const key in routerParams) {
        if (routerParams.hasOwnProperty(key)) {
            queryParams = queryParams.set(key, routerParams[key]);
        }
    }
    return queryParams;
}
}
