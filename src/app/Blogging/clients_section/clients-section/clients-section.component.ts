import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.css'],
})
export class ClientsSectionComponent implements AfterViewInit {
  @ViewChild('galleryThumbs') galleryThumbs: any;
  @ViewChild('testimonial') testimonial: any;

  ngAfterViewInit(): void {
    var galleryThumbs = new Swiper(this.galleryThumbs.nativeElement, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: false,
      },
    });

    var galleryTop = new Swiper(this.testimonial.nativeElement, {
      speed: 400,
      spaceBetween: 50,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      direction: 'vertical',
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }
}
