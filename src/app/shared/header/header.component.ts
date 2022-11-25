import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Genre } from 'src/app/models/genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent implements OnInit {

  getGeneral: Genre[] = [];
  generalName:string = '';

  constructor( private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.generalNames.subscribe( categoryName => {
      this.generalName = categoryName;
    });
    this.movieService.getGenre().subscribe( general => {
      this.getGeneral = general;
    });
  }

  genNameChange(genName:string) {
    this.movieService.generalNames.next(genName);
  }

}
