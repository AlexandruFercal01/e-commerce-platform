export class ReviewModel {
  email: string;
  comment: string;
  rating: number;

  constructor(email: string, comment: string, rating: number) {
    this.email = email;
    this.comment = comment;
    this.rating = rating;
  }
}
