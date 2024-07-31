declare var google:any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  router = inject(Router)

  ngOnInit(): void {
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

  decodeToken(token:string){
    return JSON.parse(atob(token.split('.')[1]))
  }

  handleLogin(res:any){
    const payload = this.decodeToken(res.credential)
    console.log(payload)
    sessionStorage.setItem('loginuser' , JSON.stringify(payload))
    this.router.navigate(['browse'])
  }
}
