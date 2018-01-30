import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {slideToDown} from '../router.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideToDown()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    this._ServicioService.seturl(' ');
  }

}
