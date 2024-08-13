import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AsyncPipe, isPlatformBrowser, JsonPipe } from '@angular/common';
import { HeaderComponent } from "../../core/components/header/header.component";
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { map, Observable, take } from 'rxjs';
import { movieData, Video } from '../../shared/models/video';


@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, MovieCarouselComponent, AsyncPipe, JsonPipe],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  auth = inject(AuthService)
  userData: any;
  movieService = inject(MovieService)
  movies$: Observable<Video[]> = this.movieService.getMovies().pipe(
    map(data => data.results)
  )
  data!: any

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res =>
      console.log(res)
    )
  }

  platformid!: Object
  constructor(@Inject(PLATFORM_ID) platfromid: Object) {
    this.platformid = platfromid
    if (isPlatformBrowser(this.platformid)) {
      this.userData = JSON.parse(sessionStorage.getItem('loginuser')!)

    }
  }

  singOut() {
    this.auth.singOut()
  }

}
