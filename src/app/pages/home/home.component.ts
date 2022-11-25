import { Component, OnInit } from '@angular/core';
import { Moviets } from 'src/app/models/moviets';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners:Moviets[] = [];
  getPopular:Moviets[] = [];
  topRated:Moviets[] = [];
  upComing:Moviets[] = [];

  constructor( private movService: MoviesService) { }

  ngOnInit(): void {
    this.fetchMovieList();
  }

  fetchMovieList(){
    // For banner
    this.movService.getMovies('now_playing', 5).subscribe( (response) => {
      this.banners = response;
    });
    this.movService.getMovies('popular', 5).subscribe( (response) => {
      this.getPopular = response;
    });
    this.movService.getMovies('top_rated', 5).subscribe( (response) => {
      this.topRated = response;
    });
    this.movService.getMovies('upcoming', 5).subscribe( (response) => {
      this.upComing = response;
    });
  }

}
