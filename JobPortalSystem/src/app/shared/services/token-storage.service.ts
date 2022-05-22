import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/UrlConstants';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signout(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(UrlConstants.token_key);
    window.sessionStorage.setItem(UrlConstants.token_key, token);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(UrlConstants.user_key);
    window.sessionStorage.setItem(UrlConstants.user_key, JSON.stringify(user));
  }
  public saveUserRole(userRole: any): void {
    window.sessionStorage.removeItem(UrlConstants.user_role);
    window.sessionStorage.setItem(UrlConstants.user_role, JSON.stringify(userRole));
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(UrlConstants.token_key);
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(UrlConstants.user_key);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  public getUserRole(): any {
    const user = window.sessionStorage.getItem(UrlConstants.user_role);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  public getUserCompany(): any {
    const user = this.getUser().company
    if (user) {
      return user;
    }
    return null;
  }
}


// The authentication service is used to login & logout of the Angular app, it notifies other components when the user logs in & out, and allows access the currently logged in user.

// RxJS Subjects and Observables are used to store the current user object and notify other components when the user logs in and out of the app. Angular components can subscribe() to the public currentUser: Observable property to be notified of changes, and notifications are sent when the this.currentUserSubject.next() method is called in the login() and logout() methods, passing the argument to each subscriber. The RxJS BehaviorSubject is a special type of Subject that keeps hold of the current value and emits it to any new subscribers as soon as they subscribe, while regular Subjects don't store the current value and only emit values that are published after a subscription is created. For more info on communicating between components with RxJS Observables see this post.

// The login() method sends the user credentials to the API via an HTTP POST request for authentication. If successful the user's basic authentication data (base64 encoded username and password) is added to the user object and stored in localStorage to keep the user logged in between page refreshes. The user object is then published to all subscribers with the call to this.currentUserSubject.next(user);.

// The basic auth data is used by the basic authentication interceptor above to set the authorization header of http requests made to secure api endpoints.

// The constructor() of the service initialises the currentUserSubject with the currentUser object from localStorage which enables the user to stay logged in between page refreshes or after the browser is closed. The public currentUser property is then set to this.currentUserSubject.asObservable(); which allows other components to subscribe to the currentUser Observable but doesn't allow them to publish to the currentUserSubject, this is so logging in and out of the app can only be done via the authentication service.

// The currentUserValue getter allows other components an easy way to get the value of the currently logged in user without having to subscribe to the currentUser Observable.

// The logout() method removes the current user object from local storage and publishes null to the currentUserSubject to notify all subscribers that the user has logged out.