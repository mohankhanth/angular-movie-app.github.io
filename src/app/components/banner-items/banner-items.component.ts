import { Component, Input, OnInit } from '@angular/core';
import { Moviets } from 'src/app/models/moviets';

@Component({
  selector: 'app-banner-items',
  templateUrl: './banner-items.component.html',
  styleUrls: ['./banner-items.component.scss']
})
export class BannerItemsComponent implements OnInit {

  @Input() poupulMovies:Moviets[] | null =[];
  @Input() headingTitle:string | null = null;

  constructor() { console.log(this.poupulMovies); }

  ngOnInit(): void {
    
  }

}
