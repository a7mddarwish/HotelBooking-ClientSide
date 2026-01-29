import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule , CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
 email: string = '';

  subscribe() {
    if (!this.email) return;
    console.log('Subscribed email:', this.email);
    alert(`Thanks for subscribing, ${this.email}!`);
    this.email = '';
  }
}
