import { Component, OnInit } from '@angular/core';
import { policiaModel } from './../model/policia.model';
import { Router } from '@angular/router';
import { InformacionService } from './informacion.service';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
  providers: [InformacionService],
})
export class InformacionComponent implements OnInit {

  private policiaLogeado: policiaModel;

  constructor(private loggerService: InformacionService, private router: Router) { 
    this.policiaLogeado = JSON.parse(sessionStorage.getItem('policiaLogeado'));
    console.log(this.policiaLogeado)
  }

  ngOnInit() {
  }

}
