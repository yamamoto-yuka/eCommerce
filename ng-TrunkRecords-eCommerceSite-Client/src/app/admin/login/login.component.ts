import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  showMessage = 'none';
  loginStatus = true;
  errorMessage: any = '';

  constructor(private service: CommonService, private router: Router) {}

  login(username:any, password:any) {
    this.service
      .loginService(this.username, this.password)
      .subscribe((loginData) => {
        console.log(loginData);
        this.showMessage = 'block';
        this.loginStatus = loginData.login;
        this.errorMessage = loginData.message;
        if (loginData.login) {
          this.router.navigate(['/admin']);
          console.log(loginData.data[0].userID);
          localStorage.setItem(
            'adminID',
            JSON.stringify(loginData.data[0].userID)
          );
        }
      });
  }

  ngOnInit(): void {}
}
