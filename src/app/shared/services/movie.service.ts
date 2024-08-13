import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { movieData } from '../models/video';



const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzU2ZGM0MzcyMmJjZWZlZmZhOGNjYTdkN2FjMWMxNiIsIm5iZiI6MTcyMzM0OTA5Ni4zNzIwMjQsInN1YiI6IjYzMTg1NzgyMWQxYmY0MDA3OTdlNTIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-j_szFPFU2JHnLQhSoHLTC2kKbZShSJxP1DhBqqvWj0'
  }
}

@Injectable({
  providedIn: 'root'
})




export class MovieService {
  http = inject(HttpClient)

  getMovies() {
    return this.http.get<movieData>('https://api.themoviedb.org/3/discover/movie', options)
  }
}
