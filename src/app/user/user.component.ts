import { UserModel } from './../model/usuarios.model';
import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
private user: Array<UserModel>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  private loadUser(): void {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

}
