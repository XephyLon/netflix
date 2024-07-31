declare var google:any;
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)

  constructor() { }

  singOut(){
    sessionStorage.removeItem('loginuser')
    google.accounts.id.disableAutoSelect()
    this.router.navigate(['/'])
  }

}
