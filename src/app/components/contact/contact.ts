import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contact);
    alert('Thank you for contacting us! We’ll get back to you soon.');
    this.contact = { name: '', email: '', subject: '', message: '' };
    
  }
}
