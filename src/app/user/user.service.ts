import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from './../model/usuarios.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  usuarios: Array<UserModel>;
  service_get = 'https://my-socialweb-app.herokuapp.com/getUser';
  service_delete = 'https://my-socialweb-app.herokuapp.com/deleteUser';
  constructor(private http: HttpClient) {
    this.usuarios = new Array<UserModel>();
  }

  public getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://cors-elm0n0.herokuapp.com/?q=' + this.service_get);
  }

  public delete(): Observable<any> {
    if (sessionStorage.getItem('user')) {
      this.usuarios.push(JSON.parse(sessionStorage.getItem('user')));
      return this.http.post('https://cors-elm0n0.herokuapp.com/?q=' + this.service_delete, JSON.stringify(this.usuarios));
    }
  }

}
