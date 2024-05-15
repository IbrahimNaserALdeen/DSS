import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://localhost:3000/send-email', this.formData).subscribe(
      (response) => {
        console.log('Email sent s uccessfully', response);
        // You can add a success message here
      },
      (error) => {
        console.error('Error sending email', error);
        // You can add an error message here
      }
    );
  }
}
