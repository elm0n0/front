import { CreateUserService } from './create-user.service';
import { UserModel } from './../model/usuarios.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;

  private usuarios: Array<UserModel>;

  private isValid = true;

  private mensaje;

  constructor(private createUserService: CreateUserService, private router: Router ) {
    this.user = new UserModel;
    this.usuarios = new Array<UserModel>();
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void {
      this.isValid = this.createUserService.validate(this.user);
    if (this.isValid) {
      this.usuarios.push(this.user);
      this.createUserService.saveOrUpdate(this.usuarios).subscribe((res => {}));
      this.router.navigate(['/userComponent']);
    } else {
      this.mensaje = 'Los Campos marcados con \'*\' on obligatorios';
    }
  }

}