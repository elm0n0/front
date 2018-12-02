import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from './../model/usuarios.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usuarios: Array<UserModel>;
  constructor(private http: HttpClient) {
    this.usuarios = new Array<UserModel>();
  }

  public getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8080/getUser');
  }

  public delete(): Observable<any> {
    if (sessionStorage.getItem('user')) {
      this.usuarios.push(JSON.parse(sessionStorage.getItem('user')));
      return this.http.post('http://localhost:8080/deleteUser', JSON.stringify(this.usuarios));
    }
  }

}
