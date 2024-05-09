import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-usfor-page',
  templateUrl: './contact-usfor-page.component.html',
  styleUrls: ['./contact-usfor-page.component.css'],
})
export class ContactUsforPageComponent {
  reloadPage() {
    setTimeout(() => {
      // Reload current route
      window.location.reload();
      // or
      // window.location.href = window.location.href;
    }, 2000);
  }
}
