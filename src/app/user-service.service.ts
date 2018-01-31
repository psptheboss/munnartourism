import { Injectable, transition } from '@angular/core';

@Injectable()
export class UserServiceService {


    private isUserLoggedIn;
    private username;
  constructor() { 
    this.isUserLoggedIn = false;
  }


  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
