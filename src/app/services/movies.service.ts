import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';
import { GenreObject } from '../models/genre';
import { CastCrewObject, MovieDo, MovieImageObject, Moviets, MovieVideo } from '../models/moviets';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  generalNames: BehaviorSubject<string> = new BehaviorSubject('General movie');

  movieUrl = 'https://api.themoviedb.org/3'
  keys = '86ed570014ba9773afeb9890f322c7c8';

 // 'https://api.themoviedb.org/3/movie/popular?api_key=86ed570014ba9773afeb9890f322c7c8'

  constructor( private http: HttpClient) { }

  getMovies( type:string = 'popular', count:number = 20 ) {
    return this.http.get<MovieDo>(`${this.movieUrl}/movie/${type}?api_key=${this.keys}`).pipe(
      map ( (res) => {
        return res.results.slice(0, count);
      })
    );
  }

  getMovieDetails(id:string) {
    return this.http.get<Moviets>(`${this.movieUrl}/movie/${id}?api_key=${this.keys}`).pipe(
      map ( res => {
          return res;
      })
    );
  }

  paginationMovies(page:number){
    return this.http.get<MovieDo>(`${this.movieUrl}/movie/popular?api_key=${this.keys}&page=${page}`).pipe(
      map ( (res) => {
        return res.results;
      })
    );
  }

  getMovieVideo(id:string) {
    return this.http.get<MovieVideo>(`${this.movieUrl}/movie/${id}/videos?api_key=${this.keys}`).pipe(
      map ( res => {
          return res.results;
      })
    );
  }

  getMovieImages(id:string) {
    return this.http.get<MovieImageObject>(`${this.movieUrl}/movie/${id}/images?api_key=${this.keys}`).pipe(
      map ( res => {
          return res.backdrops;
      })
    );
  }

  getMovieCharacters(id:string) {
    return this.http.get<CastCrewObject>(`${this.movieUrl}/movie/${id}/credits?api_key=${this.keys}`).pipe(
      map ( res => {
          return res.cast;
      })
    );
  }

  getSimilarMovie(id:string, count:number = 20 ) {
    return this.http.get<MovieDo>(`${this.movieUrl}/movie/${id}/similar?api_key=${this.keys}`).pipe(
      map ( res => {
          return res.results.slice(0,count);
      })
    );
  }

  getGenre() {
    return this.http.get<GenreObject>(`${this.movieUrl}/genre/movie/list?api_key=${this.keys}`).pipe(
      map ( res => {
          return res.genres;
      })
    );
  }

  getGenreByMovie(generalId:string, pageNumber:number) {
    return this.http.get<MovieDo>(`${this.movieUrl}/discover/movie?with_genres=${generalId}&page=${pageNumber}&api_key=${this.keys}`).pipe(
      map ( res => {
          return res.results;
      })
    );
  }

}
