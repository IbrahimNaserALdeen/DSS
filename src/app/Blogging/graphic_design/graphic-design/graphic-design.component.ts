import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


interface GalleryItem {
  image: string;
  subImage: string;
  title: string;
  description: string;
  format: string;
  category: string;
}

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit{
  ngOnInit(): void {
    this.showAll();
  }

  pictures: GalleryItem[] = [  
    { subImage:"../../../../assets/img/WhatsApp Image 2024-05-20 at 11.00.07 AM (1).jpeg",image: '../../../../assets/img/WhatsApp Image 2024-05-20 at 11.00.07 AM.jpeg', title: 'Shabab Jo', description: 'Design a website in a simple and distinctive way', format: 'website', category: 'https://www.shababjo.net/Homepage' },
    {subImage:"../../../../assets/img/BLOX.png", image: '../../../../assets/img/WebSiteThegardenacademy.png', title: 'Thegarden Academy', description: 'Design a website in a simple and distinctive way', format: 'website', category: 'https://www.thegardenacademy.net/Homepage' },
    { subImage:"../../../../assets/img/IPARK.png",image: '../../../../assets/img/WebsiteiPark.png', title: 'IPark', description: 'Design a website in a simple and distinctive way', format: 'website', category: 'https://www.ipark.jo' },
    {subImage:"../../../../assets/img/logoSJ.png", image: '../../../../assets/img/WebsiteJitoa.png', title: 'Jitoa', description: 'Design a website in a simple and distinctive way', format: 'website', category: 'https://www.jitoa.org/' },
    { subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg",image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-5.jpg', title: 'Pineapple', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'Photoshop', category: 'new' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg", image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-6.jpg', title: 'Yellow banana', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'Photoshop', category: 'featured' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg", image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-7.jpg', title: 'Teal Gameboy', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'Photoshop', category: 'hot' },
    { subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg",image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-8.jpg', title: 'Color in Guatemala.', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'Photoshop', category: 'featured' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-8.jpg", image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg', title: 'Red paint cup', description: 'Lorem ipsum dolor amet, consectetur adipisicing elit', format: 'JPG', category: 'new' },
    { subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-7.jpg",image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg', title: 'Lorem ipsum dolor', description: 'Lorem ipsum dolor ssit it amet, consectetur adipisicing elit', format: 'PNG', category: 'trend' },
    { subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-6.jpg",image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg', title: 'Lorem ipsum dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'JPG', category: 'featured' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-5.jpg", image: 'https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg', title: 'Lorem ipsum dolor', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'JPEG', category: 'hot' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg", image: '../../../../assets/img/logoSJ.png', title: 'Shabab Jo', description: 'Our design is in a distinctive way that indicates visual identity', format: 'Logo', category: 'new' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg", image: '../../../../assets/img/IPARK.png', title: 'Thegarden Academy', description: 'Our design is in a distinctive way that indicates visual identity', format: 'Logo', category: 'featured' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg", image: '../../../../assets/img/BLOX.png', title: 'IPark', description: 'Our design is in a distinctive way that indicates visual identity', format: 'Logo', category: 'hot' },
    {subImage:"https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg", image: '../../../../assets/img/JITOA1.png', title: 'Jitoa', description: 'Our design is in a distinctive way that indicates visual identity', format: 'Logo', category: 'featured' },
    {subImage:"../../../../assets/img/AppShababJo1.png", image: '../../../../assets/img/AppShababJo.png', title: 'ShababJo', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', format: 'App ', category: 'https://play.google.com/store/apps/details?id=com.shababjo.app213293&hl=gsw&gl=US&pli=1' },
  ];
 
  displayedPictures: GalleryItem[]  = [];

  modalItem: GalleryItem | null = null;
  showAll(): void {
    this.displayedPictures = this.pictures;
  }

  showFirstFour(): void {
    this.displayedPictures = this.pictures.slice(0, 4);
  }

  showNextFour(): void {
    this.displayedPictures = this.pictures.slice(4, 8);
  }
  showNextTherd(): void {
    this.displayedPictures = this.pictures.slice(8, 12);
  }
  showNextFive(): void {
    this.displayedPictures = this.pictures.slice(12, 16);
  }
  showNextApp(): void {
    this.displayedPictures = this.pictures.slice(16, 17);
  }
  openModal(selectedItem: GalleryItem): void {

    let index = this.pictures.findIndex(item => item.image === selectedItem.image);
    
   console.log(selectedItem,index);
    this.modalItem = selectedItem;
    
    
    const modalElement = document.getElementById('imageModal');
    console.log(modalElement);
    if (modalElement) {
      
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
     
    }
  }
}