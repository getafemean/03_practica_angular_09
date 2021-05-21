import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  numeroArticulos: number = 0;

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
    this.pedidosService.getNumeroArticulos()
                       .subscribe(data => {
                          this.numeroArticulos = data;
                       })
  }

}
