import { Subject } from 'rxjs';
import { ProductModel } from '../models/products.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  products: ProductModel[] = [
    {
      id: '1',
      title: 'Car Wash Shampoo',
      description:
        'Specially formulated shampoo for effective and gentle car washing. Leaves a streak-free finish and enhances shine.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/s/a/sampon_auto_cu_ceara_ultimate_wash_and_wax_meguiar_s_1.4l_carhub.jpg',
      price: 10.99,
      quantity: 5,
      available: true,
      category: 'Cleaners',
      rating: 5,
    },
    {
      id: '2',
      title: 'Microfiber Cleaning Cloth',
      description:
        'Ultra-soft microfiber cloth designed for gentle and scratch-free cleaning. Ideal for removing dirt, dust, and grime from car surfaces.',
      image:
        'https://assets-global.website-files.com/5a4be71aa12183000115e62c/6420692db6257e3b2f142870_800GSM%20Polishing%20Waxing%20Auto%20Detailing%20Towel%20Cloth.webp',
      price: 15.49,
      quantity: 10,
      available: true,
      category: 'Cleaners',
      rating: 4,
    },
    {
      id: '3',
      title: 'Wheel Cleaner',
      description:
        'Powerful formula to remove brake dust, dirt, and grime from wheels. Safe for all types of wheels and rims.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/s/o/solutie_curatare_jante_meguiar_s_ultimate_all_wheel_cleaner_710ml_carhub.jpg',
      price: 20.0,
      quantity: 3,
      available: true,
      category: 'Cleaners',
    },
    {
      id: '4',
      title: 'Glass Cleaner',
      description:
        'Streak-free glass cleaner for crystal-clear windows and windshields. Removes fingerprints, smudges, and residue effectively.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/s/o/solutie_curatat_geamuri_perfect_clarity_glass_cleaner_meguiar_s_709ml_carhub.jpg',
      price: 8.99,
      available: false,
      category: 'Cleaners',
      rating: 3,
      quantity: 0,
    },
    {
      id: '5',
      title: 'Tire Shine Spray',
      description:
        'Enhances the appearance of tires with a long-lasting shine. Protects against UV rays and prevents cracking and fading.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/g/1/g12024.jpg',
      price: 12.99,
      quantity: 7,
      available: true,
      category: 'Cleaners',
    },
    {
      id: '6',
      title: 'Interior Cleaner',
      description:
        'Multi-surface cleaner for car interiors. Removes stains, spills, and odors from upholstery, carpets, and plastics.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/g/1/g13616.jpg',
      price: 19.99,
      available: true,
      category: 'Interior',
      quantity: 6,
    },
    {
      id: '7',
      title: 'Leather Conditioner',
      description:
        'Nourishes and protects leather surfaces. Restores natural suppleness and prevents drying and cracking.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/s/o/solutie_curatare_hidratare_si_protectie_piele_meguiar_s_gold_class_rich_leather_450ml_carhub.jpeg',
      price: 14.49,
      quantity: 2,
      available: true,
      category: 'Interior',
    },
    {
      id: '8',
      title: 'Detailing Brush Set',
      description:
        'Set of brushes for detailing car interiors and exteriors. Ideal for reaching into crevices and tight spaces.',
      image:
        'https://s13emagst.akamaized.net/products/64322/64321776/images/res_0d520b1dfa89bc7a78b3ffa9380c9ee5.jpg?width=450&height=450&hash=EB99ABF37A5453E9DEDF7FE37F1C1210',
      price: 22.99,
      available: true,
      category: 'Exterior',
      quantity: 9,
    },
  ];
  filteredProducts = new Subject<ProductModel[]>();
  productsFiltered = this.products;

  getProducts(): ProductModel[] {
    return this.products.slice();
  }

  onAddToCart(product: ProductModel) {
    console.log(this.productsFiltered);
  }

  onFilterByCategory(category: string) {
    this.filteredProducts.next(
      this.productsFiltered.filter(
        (products: ProductModel) => products.category === category
      )
    );
  }

  onFilterByPrice(lowPrice: number, highPrice: number) {
    this.filteredProducts.next(
      this.productsFiltered.filter((product) => {
        if (lowPrice && highPrice) {
          return product.price >= lowPrice && product.price <= highPrice;
        } else if (lowPrice) {
          return product.price >= lowPrice;
        } else if (highPrice) {
          return product.price <= highPrice;
        } else {
          return product;
        }
      })
    );
  }

  onFilterByRating(rating: number) {
    this.filteredProducts.next(
      this.productsFiltered.filter((product) => product.rating === rating)
    );
  }
}
