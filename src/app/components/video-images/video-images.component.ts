import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IMAGESIZE } from 'src/app/constrant/image-size';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'video-images',
  templateUrl: './video-images.component.html',
  styleUrls: ['./video-images.component.scss']
})
export class VideoImagesComponent implements OnInit {

  @Input() videoImages:string | null = null;
  imageSizes = IMAGESIZE;

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
   // console.log(this.videoImages);
  }



}
