import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-usfor-page',
  templateUrl: './contact-usfor-page.component.html',
  styleUrls: ['./contact-usfor-page.component.css'],
})
export class ContactUsforPageComponent {

  formData = {
    name: '',
    emailAddress: '',
    message: ''
  };

  submitted = false;
  error = false;

  constructor(private http: HttpClient) { }

  submitForm() {
    this.http.post('https://formspree.io/f/xwkgzqkg', this.formData)
      .subscribe(
        response => {
          console.log('Form submission successful:', response);
          this.submitted = true;
          this.error = false;
        },
        error => {
          console.error('Error sending message:', error);
          this.submitted = false;
          this.error = true;
        }
      );
  }

}