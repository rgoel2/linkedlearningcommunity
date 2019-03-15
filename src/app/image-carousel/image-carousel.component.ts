import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  
  path = '/assets/images/'
  images = []
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    for(let i=0;i<6;i++)
      this.images.push(`${this.path}image${i}.jpg`)
  }
}
