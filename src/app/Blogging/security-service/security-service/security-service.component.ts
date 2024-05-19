import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-security-service',
  templateUrl: './security-service.component.html',
  styleUrls: ['./security-service.component.css']
})
export class SecurityServiceComponent {


  openModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
