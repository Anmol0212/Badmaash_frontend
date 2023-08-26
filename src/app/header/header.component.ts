import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSlide = 1;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide % 2) + 1;
    }, 5000); // Change slide every 10 seconds (10000 milliseconds)
  }
}
