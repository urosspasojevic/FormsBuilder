import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from './login-credentials.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [LoginService]
})
export class LoginFormComponent implements OnInit {
  public model: LoginCredentials;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.model = new LoginCredentials();
  }

  public login() {
    this.loginService.getUsers().subscribe(users => {
      const index = users.findIndex(u => u.username === this.model.username && u.password === this.model.password);
      if (index > -1) {
        this.router.navigate(['home']);
      }
    });
  }

}
