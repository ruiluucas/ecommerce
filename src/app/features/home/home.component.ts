import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HomeComponent, AsideComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
