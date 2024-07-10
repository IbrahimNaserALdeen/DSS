import { Component } from '@angular/core';

@Component({
  selector: 'app-lms-offer',
  templateUrl: './lms-offer.component.html',
  styleUrls: ['./lms-offer.component.css']
})
export class LmsOfferComponent {
  whatsappNumber: string = '0782028246'; // Replace with actual number
  message: string = 'I would like to order now';

  get whatsappLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
}
