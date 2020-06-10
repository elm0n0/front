import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerModel } from './../model/logger.model';
import { LoggerPoliciaService } from './logger-policia.service';
import { policiaModel } from './../model/policia.model';

@Component({
  selector: 'app-logger-policia',
  templateUrl: './logger-policia.component.html',
  styleUrls: ['./logger-policia.component.css'],
  providers: [LoggerPoliciaService],
})
export class LoggerPoliciaComponent implements OnInit {
  policiaLog: LoggerModel;

  policia: policiaModel;

  isValid: Boolean;

  constructor(private loggerService: LoggerPoliciaService, private router: Router) {
      this.policiaLog = new LoggerModel;
  }

  ngOnInit() {
  }

  public loggear() {
    // validamos que el usuario de entrada es valido
    this.isValid = this.loggerService.validarLoggin(this.policiaLog);
    this.loggerService.logear(this.policiaLog).subscribe(res => {
      this.policia = res;
      sessionStorage.setItem('policiaLogeado', JSON.stringify(this.policia));
      if (this.policia != null) {
        this.router.navigate(['/infomacion']);
      }
    });
  }

}
