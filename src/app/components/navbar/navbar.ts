import { Component , OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {
ngOnInit(): void {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
      nav?.classList.add("scrolled");
    } else {
      nav?.classList.remove("scrolled");
    }
  });
}

}
