import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { movieData } from '../models/video';
import { forkJoin, map, Observable } from 'rxjs';



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
  src = [
    this.http.get<movieData>('https://api.themoviedb.org/3/discover/movie',options).pipe(map(res=>res.results)),
    this.http.get<movieData>('https://api.themoviedb.org/3/discover/tv',options).pipe(map(res=>res.results))
  ]
  getAllData(){
    return forkJoin(this.src)
  }


  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';



  getData(): Observable<any[]> {
    return forkJoin(
      this.src
    );
  }

  getMovies():Observable<movieData>{
    return this.http.get<movieData>('https://api.themoviedb.org/3/discover/movie',options)
  }

  getTvShows():Observable<movieData>{
    return this.http.get<movieData>('https://api.themoviedb.org/3/discover/tv', options)
  }
}
