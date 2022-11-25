import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moviets } from 'src/app/models/moviets';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit, OnDestroy {
  banners:Moviets[] = [];
  generalMovie:Moviets[] = [];

  totalItems = 100;
  currentPage:number = 1;
  genresId:string = '';

  movieCategory: string = '';

 
  constructor( private movService: MoviesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.movService.getMovies('now_playing', 1).subscribe( (response) => {
      this.banners = response;
    });

    this.router.params.subscribe( ({genresId}) => {
      console.log(genresId);
      this.genresId = genresId;
      this.getGeneralMovie(genresId, this.currentPage);
    });

    this.movService.generalNames.subscribe( categoryName => {
      this.movieCategory = categoryName+' movie';
    });
  }

  getGeneralMovie(id:string, numbers:number) {
    this.movService.getGenreByMovie(id, numbers).subscribe( generalMovie => {
      console.log(generalMovie);
      this.generalMovie = generalMovie;
    })
  }

  setPage(event: any): void {
    this.currentPage = event.page;
    console.log(event.page);
    this.getGeneralMovie(this.genresId,this.currentPage);
  }

  ngOnDestroy(){
    this.movService.generalNames.next('General movie');
  }

}
