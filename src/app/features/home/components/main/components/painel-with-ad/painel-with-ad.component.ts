import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-with-ad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-with-ad.component.html',
  styleUrls: ['./painel-with-ad.component.scss'],
})
export class PainelWithAdComponent {
  currentSlide = 0;
  slides: string[] = ['computers', 'mobile', 'programming'];
  transitioning = false;

  nextSlide() {
    if (this.transitioning) return;
    this.transitioning = true;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    if (this.transitioning) return;
    this.transitioning = true;
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  onTransitionEnd() {
    this.transitioning = false;
  }
}
