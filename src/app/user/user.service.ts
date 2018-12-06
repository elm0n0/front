import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from './../model/usuarios.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usuarios: Array<UserModel>;
  private service_get = 'getUser';
  private service_delete = 'deleteUser';
  constructor(private http: HttpClient) {
    this.usuarios = new Array<UserModel>();
  }

  public getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.service_get);
  }

  public delete(): Observable<any> {
    if (sessionStorage.getItem('user')) {
      this.usuarios.push(JSON.parse(sessionStorage.getItem('user')));
      return this.http.post(this.service_delete, JSON.stringify(this.usuarios));
    }
  }

}
