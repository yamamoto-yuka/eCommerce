import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'appareldetails',
  templateUrl: './appareldetails.component.html',
  styleUrls: ['./appareldetails.component.scss'],
})
export class AppareldetailsComponent implements OnInit {
  product: any;

  constructor(
    private param: ActivatedRoute,
    private service: CommonService
  ) {}

  changeboolean(data: any) {
    if (data === 0) return true;
    else return false;
  }

  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.service.getproductByID(id).subscribe((product) => {
      this.product = product.productData[0];
      console.log(this.product);
    });
  }
}
