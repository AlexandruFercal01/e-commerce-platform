export class ProductModel {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity?: number;
  available: boolean;
  category: string;
  rating?: number;

  constructor(
    id: string,
    title: string,
    description: string,
    image: string,
    price: number,
    quantity: number,
    category: string,
    rating?: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.available = this.quantity > 0;
    this.category = category;
    this.rating = rating || 0;
  }
}
