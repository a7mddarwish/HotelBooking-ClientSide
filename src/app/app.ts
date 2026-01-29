import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar , FormsModule , Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HotelBooking-ClientSide');
}
