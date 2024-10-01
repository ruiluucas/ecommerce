import { CardsComponent } from './components/cards/cards.component';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FieldsComponent } from './components/fields/fields.component';
import { LatestBrandsComponent } from './components/latest-brands/latest-brands.component';
import { OurBlogsComponent } from './components/our-blogs/our-blogs.component';
import { PainelWithAdComponent } from './components/painel-with-ad/painel-with-ad.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { SpecialProductsComponent } from './components/special-products/special-products.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CardsComponent,
    FieldsComponent,
    LatestBrandsComponent,
    OurBlogsComponent,
    PainelWithAdComponent,
    RecommendationsComponent,
    SpecialProductsComponent,
    MatIconModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
