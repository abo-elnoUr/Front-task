import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss'
})
export class LandingHeaderComponent {

  currentIndex: number = 0

  images: any[] = [
    { name: 'slider 1', path: 'assets/images/slider/slider1.jpg' },
    { name: 'slider 2', path: 'assets/images/slider/slider2.jpg' },
    { name: 'slider 3', path: 'assets/images/slider/slider3.jpg' },
  ]


  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }


}
