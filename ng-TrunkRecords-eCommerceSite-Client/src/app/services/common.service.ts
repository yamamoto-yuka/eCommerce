import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { User } from '../interfaces/adminuser';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private productURL = 'http://localhost:4500/product';
  private toggleURL = 'http://localhost:4500/displayupdate';
  private signupURL = 'http://localhost:4500/signup';
  private loginURL = 'http://localhost:4500/login';

  constructor(private http: HttpClient) {}

  uploadFile(filedata: any) {
    return this.http.post('http://localhost:4500/upload', filedata);
  }

  getAllproduct() {
    return this.http.get<Product[]>(this.productURL);
  }

  getproductByID(id: number) {
    return this.http.get<{
      productid: boolean;
      message: string;
      productData: Product[];
    }>(this.productURL + '/' + id);
  }

  signupService(username: string, password: string) {
    let signupbody = {
      username: username,
      password: password,
    };
    return this.http.post<{
      userData: User[];
      signup: boolean;
      message: string;
    }>(this.signupURL, signupbody);
  }

  loginService(username: string, password: string) {
    let loginbody = {
      username: username,
      password: password,
    };
    return this.http.post<{ data: User[]; login: boolean; message: string }>(
      this.loginURL,
      loginbody
    );
  }

  addNewProduct(
    product_name: string,
    product_desc: string,
    product_price: number,
    product_image1: string,
    product_image2: string,
    product_availability: number
  ) {
    let newproductbody = {
      product_name: product_name,
      product_desc: product_desc,
      product_price: product_price,
      product_image1: product_image1,
      product_image2: product_image2,
      product_availability: product_availability,
    };
    return this.http.post<{
      newProduct: Product[];
      insert: boolean;
      message: string;
    }>(this.productURL, newproductbody);
  }

  updateProduct(
    ProductID: number,
    product_name: string,
    product_desc: string,
    product_price: number,
    product_image1: string,
    product_image2: string,
    product_quantity: any
  ) {
    let updatebody = {
      ProductID: ProductID,
      product_name: product_name,
      product_desc: product_desc,
      product_price: product_price,
      product_image1: product_image1,
      product_image2: product_image2,
      product_quantity: product_quantity,
    };
    return this.http.put<{
      update: boolean;
      updatedData: Product[];
      message: string;
    }>(this.productURL, updatebody);
  }

  updateDisplay(ProductID: number) {
    let updatedisplaybody = {
      ProductID: ProductID,
    };
    return this.http.put<{
      displayData: Product[];
      display: boolean;
      message: string;
    }>(this.toggleURL, updatedisplaybody);
  }

  deleteProduct(id: number) {
    return this.http.delete<{ delStatus: boolean; message: string }>(
      this.productURL + '/' + id
    );
  }
}
