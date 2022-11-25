import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {

  @Input() key: string | null = null;
  @Input() site: string = 'YouTube';

  videoUrl:SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    switch(this.site) {
      case 'YouTube' : this.videoUrl = this.getUrls('https://www.youtube.com/embed/'+ this.key);
      break;
      case 'Vimeo' : this.videoUrl = this.getUrls('https://www.Vimeo.com/embed/'+ this.key);
      break;
    }
    
  }

  getUrls(url:string) {
    return  this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
