import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../servicios/pedidos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  articulos: Array<any> = [
    {id: '01', nombre: 'Nike Michael Jordan', descripcion: 'Lorem ipsum'},
    {id: '02', nombre: 'Adidas Nadal', descripcion: 'Lorem ipsum'},
    {id: '03', nombre: 'Puma Messi', descripcion: 'Lorem ipsum'}
  ]

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {
  }

  addToPedido(nombreArticulo: string) {
    this.pedidosService.setArticuloToPedido(nombreArticulo);
  }

}
