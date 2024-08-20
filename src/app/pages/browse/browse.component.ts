import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AsyncPipe, isPlatformBrowser, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from "../../core/components/header/header.component";
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import {  forkJoin, map, Observable } from 'rxjs';
import { movieData } from '../../shared/models/video';
import { Video } from '../../shared/models/video';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent , BannerComponent , MovieCarouselComponent ,AsyncPipe , JsonPipe , NgIf , NgFor],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  auth = inject(AuthService)
  userData:any;
movieService = inject(MovieService)
movies$!:Observable<Video[]>
tvShows$!:Observable<Video[]>
data$!: Observable<any[]>;
sources = [
  this.movies$ = this.movieService.getMovies().pipe(map(data=> data.results)),
   this.tvShows$ = this.movieService.getTvShows().pipe(map(res => res.results))
]

ngOnInit(): void {
  this.movieService.getTvShows().subscribe(res=> console.log(res))

}
  
  platformid!:Object
  constructor(@Inject(PLATFORM_ID) platfromid:Object){
    this.platformid = platfromid
      if (isPlatformBrowser(this.platformid)) {
    this.userData = JSON.parse(sessionStorage.getItem('loginuser')!),
    this.data$ = this.movieService.getData();
    
  }
  }

  singOut(){
    this.auth.singOut()
  }

}
