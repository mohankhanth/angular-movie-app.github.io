import { Component, Input, OnInit } from '@angular/core';
import { IMAGESIZE } from 'src/app/constrant/image-size';
import { Moviets } from 'src/app/models/moviets';

interface IMAGESIZE {
  samll: string;
  medium: string;
  large:  string;
 }

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() movieItems:Moviets | null = null;
  imageSize:IMAGESIZE = IMAGESIZE;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movieItems);
  }

}
