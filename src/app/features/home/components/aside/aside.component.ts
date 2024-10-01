import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent implements OnInit {
  interval: any;

  currentSlide = 0;
  slides: string[] = ['computers', 'mobile', 'programming'];
  transitioning = false;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    if (this.transitioning) return;
    this.transitioning = true;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    console.log(this.currentSlide);
  }

  onTransitionEnd() {
    this.transitioning = false;
  }
}
