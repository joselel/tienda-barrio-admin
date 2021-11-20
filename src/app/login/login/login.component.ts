import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required])

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {this.auth.login();}

  logout() {this.auth.logout();}

}
