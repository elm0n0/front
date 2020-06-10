import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerModel } from '../model/logger.model';
import { policiaModel } from '../model/policia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerPoliciaService {

  private isUsuarioValidado:Boolean;
  private isPasswdValidado:Boolean;

  validarLoggin(credentials: LoggerModel):Boolean {
    // reglas nombre usuario
    return this.validarUsuario(credentials.usuario)
  }
  validarUsuario(usuario: string):Boolean {
    return true;
  }
  corsRute = 'https://cors-elm0n0.herokuapp.com/?q=';
  policia: policiaModel;
  servicePost = 'https://my-socialweb-app.herokuapp.com/loggin/loggearPolicia';
  constructor(private http: HttpClient) {
  }

  public logear(policiaLog: LoggerModel): Observable<any> {
    return this.http.post(this.corsRute + this.servicePost, JSON.stringify(policiaLog));
  }

}