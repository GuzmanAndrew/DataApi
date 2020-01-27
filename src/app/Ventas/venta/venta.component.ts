import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../Service/service.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  listaVentas: any = [];

  constructor(protected service: ServiceService) { }

  ngOnInit() {
    // this.listaVentas = [];
    this.service.getApiThree().subscribe(data => {
      console.log(data);
      this.listaVentas = data;
    });
  }
}
