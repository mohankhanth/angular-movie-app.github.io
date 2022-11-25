import { Component, Input, OnInit } from '@angular/core';
import { Moviets } from 'src/app/models/moviets';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() inmovie:Moviets[] = []

  showIndicator:boolean = false;
  @Input() isIndicator:boolean = false;

  myInterval = 2500;
  activeSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.showIndicator = this.isIndicator;
  }

}
