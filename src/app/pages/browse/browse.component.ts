import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  auth = inject(AuthService)
  userData = JSON.parse(sessionStorage.getItem('loginuser')!)
  // ngOnInit(): void {
  //   console.log(JSON.parse(sessionStorage.getItem('loginuser')!))
  // }

  singOut(){
    this.auth.singOut()
  }

}
