import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IMAGESIZE } from 'src/app/constrant/image-size';
import { Cast, MovieDo, MovieImageBackdrop, Moviets, MovieVideo, MovieVideoDo } from 'src/app/models/moviets';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movies: Moviets | null = null;
  moviesVideo: MovieVideoDo[] = [];
  imageSizes = IMAGESIZE;
  moviesImages: MovieImageBackdrop[] = [];
  moviesCharacters: Cast[] = [];
  moviesSimilar: Moviets[] | null = [];

  itemsPerSlide = 5;
  singleSlideOffset = true;

  constructor( private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe( ({id}) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImagesFns(id);
      this.getMovieCharacterFns(id);
      this.getMoviesSimilar(id)
    });
  }
  
  getMovie(id:string) {
    this.moviesService.getMovieDetails(id).subscribe( data => {
       // console.log(data);
        this.movies = data;
      })
  }

  //getMovieVideo

  getMovieVideos(id:string) {
    this.moviesService.getMovieVideo(id).subscribe( data => {
       this.moviesVideo = data;
      })
  }

  getMovieImagesFns(id:string) {
    this.moviesService.getMovieImages(id).subscribe( data => {
       this.moviesImages = data;
      })
  }

  //getMovieCharacters
  getMovieCharacterFns(id:string) {
    this.moviesService.getMovieCharacters(id).subscribe( data => {
      let isImagePath =  data.filter(img => img.profile_path != null);
       this.moviesCharacters = isImagePath;
      })
  }

  getMoviesSimilar(id:string) {
    this.moviesService.getSimilarMovie(id, 5).subscribe( data => {
      console.log(data);
     this.moviesSimilar = data;
    })
  }

}
