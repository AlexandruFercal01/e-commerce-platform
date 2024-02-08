export class ProductModel {
  title: string;
  description: string;
  image: string;
  price?: string;

  constructor(
    title: string,
    description: string,
    image: string,
    price: string
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}
