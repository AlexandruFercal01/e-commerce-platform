import { ReviewModel } from './review.model';

// program to generate random strings

// declare all characters
// const characters =
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString() {
//   let result = ' ';
//   const charactersLength = characters.length;
//   for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }
export class ProductModel {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  available: boolean;
  category: string;
  rating?: number;
  reviews?: ReviewModel[];
  isNew?: boolean;
  isSale?: boolean;
  sale?: number;

  constructor(
    id: string,
    title: string,
    description: string,
    image: string,
    price: number,
    quantity: number,
    category: string,
    reviews?: ReviewModel[],
    isNew?: boolean,
    sale?: number
  ) {
    this.id = id || '';
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.available = this.quantity > 0;
    this.category = category;
    this.rating = 0;
    this.reviews = reviews || [];
    this.isNew = isNew || false;
    this.isSale = !!sale || false;
    this.sale = sale || 0;
  }
}
