import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.scss'],
})
export class ApparelComponent implements OnInit {
  products: any[] = [];
  constructor(private service: CommonService) {}

  availavility(data: any) {
    if (data > 0) return true;
    else return false;
  }

  ngOnInit(): void {
    this.service.getAllproduct().subscribe((productData) => {
      this.products = productData;
      console.log(productData);
    });
  }
}
