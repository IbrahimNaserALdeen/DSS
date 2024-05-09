import { Component } from '@angular/core';

@Component({
  selector: 'app-lms-page',
  templateUrl: './lms-page.component.html',
  styleUrls: ['./lms-page.component.css'],
})
export class LmsPageComponent {
  clientTestimonials = [
    {
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Doe',
      comment:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Alice Smith',
      comment:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bob Johnson',
      comment:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl: 'https://via.placeholder.com/150',
    },
  ];

  carouselOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['&lsaquo;', '&rsaquo;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
