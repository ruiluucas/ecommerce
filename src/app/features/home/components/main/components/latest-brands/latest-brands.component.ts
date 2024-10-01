import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-latest-brands',
  templateUrl: './latest-brands.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./latest-brands.component.scss'],
})
export class LatestBrandsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const logosSlide = this.el.nativeElement.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    this.el.nativeElement.querySelector('.logos').appendChild(copy);
  }
}
