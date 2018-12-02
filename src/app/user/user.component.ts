import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from './../model/usuarios.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  private users: Array<UserModel>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUser();
  }

  private loadUser(): void {
    this.userService.getUser().subscribe(res => {
      this.users = res;
    });
    this.router.navigate(['/userComponent']);
  }

  public edit(usuarios: Array<UserModel>): void {
    sessionStorage.setItem('user', JSON.stringify(usuarios));
    this.router.navigate(['/createUserComponent']);
  }

  public delete(usuarios: Array<UserModel>) {
    sessionStorage.setItem('user', JSON.stringify(usuarios));
    this.userService.delete().subscribe(res => {
      this.ngOnInit();
      if (sessionStorage.getItem('user')) {
        sessionStorage.clear();
      }
    });
  }

}
