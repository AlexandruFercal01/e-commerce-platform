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
      isNew: true,
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
      rating: 3,
      isNew: true,
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
      rating: 5,
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
      isNew: true,
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
      rating: 4,
      isNew: true,
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
    {
      id: '9',
      title: 'Car Cleaning Accessory Bag',
      description: 'This bag contains all you need for detailing a car.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/a/d/adbl-wizualizacja-roller_torba-mala-4.png',
      price: 59.99,
      available: true,
      category: 'Exterior',
      quantity: 10,
    },
    {
      id: '10',
      title: '12 Products Pack',
      description:
        'Pack that contains 12 cleansers for your car. Ideal for detailing and cleaning.',
      image:
        'https://s13emagst.akamaized.net/products/58858/58857296/images/res_3681738b162a72f8ad8c94c9f5e6c83c.jpg?width=450&height=450&hash=90DC4F6B81228C2AC169BF7566C1B287',
      price: 79.99,
      available: true,
      quantity: 12,
      category: 'Exterior',
      rating: 5,
      isNew: true,
    },
    {
      id: '11',
      title: 'Seat Cleaner',
      description:
        'Seat cleaner for car interior. Removes dirt, and grime from seats.',
      image:
        'https://s13emagst.akamaized.net/products/41280/41279163/images/res_e43678579afe5e24efa8ea197c53fd59.jpg?width=450&height=450&hash=C496E96B1DF361C88071E71C02819E9B',
      price: 9.99,
      available: true,
      category: 'Interior',
      quantity: 15,
      sale: 20,
      isNew: true,
    },
    {
      id: '12',
      title: 'Interior Detailing Brushes',
      description: 'Set of brushes for detailing car interiors.',
      image:
        'https://s13emagst.akamaized.net/products/39003/39002101/images/res_d8a49f80a20a85ecd15e6e39bba8cb3b.jpg?width=300&height=300&hash=6486E2CE07C6A26358784384F3C85B43',
      price: 19.99,
      available: true,
      category: 'Interior',
      quantity: 21,
      rating: 4,
    },
    {
      id: '13',
      title: 'Leather Cleaning Kit',
      description:
        'Leather wax for car interior. Removes dirt, grime, and creases.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/a/d/adbl_leather_kit-_ingrijire_piele_auto-_curatare_si_mentenanta_piele_auto-produse.png',
      price: 9.99,
      available: true,
      category: 'Interior',
      quantity: 15,
      rating: 4,
    },
    {
      id: '14',
      title: 'Auto Perfume',
      description: 'Make your car smell more fresh and clean.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/p/a/parfum_auto_fig_forest_adbl_magic_mist_200ml_carhub.jpg',
      price: 7.99,
      available: true,
      category: 'Interior',
      quantity: 21,
      rating: 5,
      isNew: true,
    },
    {
      id: '15',
      title: 'Bucket',
      description: 'Bucket for car detailing. Ideal for cleaning your car.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/small_image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/g/a/galeata_spalare_auto_meguiar_s_empty_bucket_19l_rg203_carhub.jpg',
      price: 9.99,
      available: true,
      category: 'Exterior',
      quantity: 21,
    },
    {
      id: '16',
      title: 'Atomizer',
      description: 'Great for spreading bubbles all over your car.',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/small_image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/t/atomizor_spuma_cu_presiune_si_pulverizator_2_in_1_adbl_bff_bfs_kit_carhub_2.png',
      price: 17.99,
      available: true,
      category: 'Exterior',
      quantity: 11,
      rating: 4,
      isNew: true,
    },
  ];
  filteredProducts = new Subject<ProductModel[]>();
  productsFiltered = this.products;

  getProducts(): ProductModel[] {
    return this.products.slice();
  }

  getNewProducts(): ProductModel[] {
    return this.products.filter((product) => product.isNew === true).slice();
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

  onRemoveFilter() {
    this.filteredProducts.next(this.products);
  }
}
