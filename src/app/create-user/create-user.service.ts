import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from './../model/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }
  service_saveOrUpdate = 'saveOrUpdate';
  /**
   * metodo que valida campos obligatorios.
   */
  public validate(user: UserModel): boolean {
    let isValid = true;
    if (!user.nombre) {
      isValid = false;
    }
    if (!user.apellido) {
      isValid = false;
    }
    if (!user.email) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(usuario: Array<UserModel>): Observable<Object> {
    return this.http.post(this.service_saveOrUpdate, JSON.stringify(usuario));
  }
}
