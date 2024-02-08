import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  currentSlide: number = 0;
  slides: string[] = [
    'https://media.cnn.com/api/v1/images/stellar/prod/meguiar-gold-class-car-wash-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill',
    'https://media.zenfs.com/en/road_track_223/b69cf767292066950040fc9a6f20e64f',
    'https://images.contentstack.io/v3/assets/bltf1dd6317cb2088d3/blt8af3734b18bba95a/60ab11c9909370737ae4976e/Wash_away_the_grime_but_not_your_car%E2%80%99s_polish_or_wax_with_the_Amway_Home_Car_Wash.jpg',
  ];

  nextSlide() {
    if (this.currentSlide >= this.slides.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  prevSlide() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
  }
}
