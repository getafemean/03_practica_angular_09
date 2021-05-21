import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private articulosPedido: Array<string> = [];
  private numeroArticulos = new Subject<number>();

  constructor() { }

  getNumeroArticulos(): Observable<any> {
    return this.numeroArticulos.asObservable();
  }

  setArticuloToPedido(nombreArticulo: string): void {
    this.articulosPedido.push(nombreArticulo);
    this.numeroArticulos.next(this.articulosPedido.length);
  }

  


}
