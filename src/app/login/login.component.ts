import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string  
  password:string
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(res => {
      console.log(res)
      if (res['access_token']) {
        this.authService.isLoggedIn = true
        window.location.href = '/#/'
      }
    })
  }

}
