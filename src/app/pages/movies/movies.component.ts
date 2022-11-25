import { Component, OnInit } from '@angular/core';
import { Moviets } from '../../models/moviets';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  banners:Moviets[] = [];
  getPopular:Moviets[] = [];

  totalItems = 100;
  currentPage:number = 1;
  
  constructor( private movService: MoviesService) { }

  ngOnInit(): void {
    this.getBanners();
    this.getAllMovies(this.currentPage);
  }

  getBanners(){
    // For banner
    this.movService.getMovies('top_rated', 1).subscribe( (response) => {
      this.banners = response;
    });
  }

  getAllMovies(page:number) {
    this.movService.paginationMovies(page).subscribe( (response) => {
      this.getPopular = response;
    });
  }

  setPage(event: any): void {
    this.currentPage = event.page;
    console.log(event.page);
    this.getAllMovies(this.currentPage);
  }

}
