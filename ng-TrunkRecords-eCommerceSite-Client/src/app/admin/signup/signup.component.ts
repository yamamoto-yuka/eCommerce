import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  username: string = '';
  password1: string = '';
  password2: string = '';
  showMessage = 'none';
  signupStatus = false;
  errorMessage: any = '';

  constructor(private service: CommonService) {}
  signup(username: any, password1: any, password2: any) {
    console.log(username, password1, password2);
    this.service
      .signupService(this.username, this.password1)
      .subscribe((signupData) => {
        console.log(signupData);
        this.showMessage = 'block';
        this.signupStatus = signupData.signup;
        this.errorMessage = signupData.message;
      });
  }
  ngOnInit(): void {}
}
