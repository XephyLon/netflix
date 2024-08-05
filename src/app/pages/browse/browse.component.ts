import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../../core/components/header/header.component";


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  auth = inject(AuthService)
  userData:any;
  // if (isPlatformBrowser(this.platformid)) {
  //   userData = JSON.parse(sessionStorage.getItem('loginuser')!)
    
  // }
  
  platformid!:Object
  constructor(@Inject(PLATFORM_ID) platfromid:Object){
    this.platformid = platfromid
      if (isPlatformBrowser(this.platformid)) {
    this.userData = JSON.parse(sessionStorage.getItem('loginuser')!)
    
  }
  }

  singOut(){
    this.auth.singOut()
  }

}
