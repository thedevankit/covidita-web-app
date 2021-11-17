import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-deails',
  templateUrl: './product-deails.component.html',
  styleUrls: ['./product-deails.component.scss']
})
export class ProductDeailsComponent implements OnInit {

  variantsGroup = new Array(6);
  productVariants = [
    {
      name: 'abc'
    },
    {
      name: 'xyz'
    }
  ]
  selectedVariant = this.productVariants[0];
  constructor() {

  }

  ngOnInit(): void {
  }

}
