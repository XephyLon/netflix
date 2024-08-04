declare var google:any;
import { Component,Inject, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  router = inject(Router)

  platformid!:Object
  constructor(@Inject(PLATFORM_ID) platfromid:Object){
    this.platformid = platfromid
  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformid)) {
      google.accounts.id.initialize({
        client_id: '531121168764-fj0qmf042utb4q601id0dt2ojmdpe6ej.apps.googleusercontent.com',
        callback: (resp: any)=> {
          this.handleLogin(resp)
          // console.log(resp)
        }
      });
  
      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        // width: 300
      })
    }
  }

  decodeToken(token:string){
    return JSON.parse(atob(token.split('.')[1]))
  }

  handleLogin(res:any){
    const payload = this.decodeToken(res.credential)
    if (isPlatformBrowser(this.platformid)) {
      sessionStorage.setItem('loginuser' , JSON.stringify(payload))
    }
    this.router.navigate(['browse'])
  }
}
