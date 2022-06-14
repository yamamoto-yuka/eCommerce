import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
})
export class ManageProductComponent implements OnInit {
  products: any[] = [];
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  product_image1: string = '';
  product_image2: string = '';
  product_availability: any = '';
  showMessage = 'none';
  addproductStatus = false;
  errorMessage: any = '';
  imageformData: any;

  constructor(
    private cs: CommonService,
    private activerouter: ActivatedRoute
  ) {}

  onChange(event: any) {
    let file: File = event.target.files;
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    this.imageformData = formData;
  }

  uploadImage() {
    this.cs.uploadFile(this.imageformData).subscribe((response) => {
      console.log(response);
    });
  }

  availavility(data: any) {
    if (data > 0) return true;
    else return false;
  }

  addproduct() {
    this.cs
      .addNewProduct(
        this.product_name,
        this.product_desc,
        this.product_price,
        this.product_image1,
        this.product_image2,
        this.product_availability
      )
      .subscribe((newproductDate) => {
        console.log(newproductDate);
        this.showMessage = 'block';
        this.addproductStatus = newproductDate.insert;
        this.errorMessage = newproductDate.message;
        this.ngOnInit();
      });
  }

  toggledisplay(id: number) {
    this.cs.updateDisplay(id).subscribe((displayData) => {
      console.log(displayData);
    });
  }

  ngOnInit(): void {
    this.cs.getAllproduct().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
