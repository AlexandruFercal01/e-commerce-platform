import { Component } from '@angular/core';
import { ProductModel } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: ProductModel[] = [
    {
      title: 'Wheel Cleaner',
      description: 'Clean your car wheels',
      image:
        'https://nextzett.ro/wp-content/uploads/2023/06/97000515_Colortec_Wheel_Cleaner__67997.jpg',
      price: '$10',
    },
    {
      title: 'Microfiber Cloth',
      description: 'Dry up your vehicle',
      image:
        'https://sobby.in/cdn/shop/products/microfiber-cloth-800gsm-yellow-grey-1pc.jpg?v=1647859322',
      price: '$5',
    },
    {
      title: 'Car Wax',
      description: 'Clean your car wheels',
      image:
        'https://gomagcdn.ro/domains2/indetail.ro/files/product/large/ceara-auto-solida-meguiar-s-gold-class-carnauba-plus-premium-paste-wax-311g-198532.jpg',
      price: '$25',
    },
    {
      title: 'Car brushes kit',
      description: 'Lorem ipsum',
      image:
        'https://image.made-in-china.com/2f0j00jsRtLybnHPUE/Car-Washing-Cleaning-Kit-Tools-Car-Wash-Equipment-Seven-in-One-Car-Wash-Mitt-Auto-Cleaner-Duster-Vehicle-Squeegee-Microfiber-Rag-Cleaning-Accessories-Esg13053.webp',
      price: '$30',
    },
    {
      title: 'Car Cleaning Starting Kit',
      description: 'Clean your car wheels',
      image: 'https://www.autoone.com.au/Images/ProductImages/92343833.jpg',
      price: '$80',
    },
    {
      title: 'Color Clarity Wax',
      description: 'Clean your car wheels',
      image:
        'https://www.carhub.ro/media/catalog/product/cache/1/image/2000x2000/9df78eab33525d08d6e5fb8d27136e95/p/a/pasta_polish_auto_abraziv_ultimate_compound_meguiar_s_450ml_carhub.jpg',
      price: '$40',
    },
  ];
}
