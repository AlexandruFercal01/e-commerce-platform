import { Component, Input } from '@angular/core';
import { ReviewModel } from '../../../models/review.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
})
export class ReviewCardComponent {
  @Input() review!: ReviewModel;

  createRange(end: number) {
    const stars = [];
    for (var i = 0; i < end; i++) {
      stars.push(i);
    }
    return stars;
  }
}
