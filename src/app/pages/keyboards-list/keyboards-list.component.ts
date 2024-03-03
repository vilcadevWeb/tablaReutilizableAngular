import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { ProductService } from '../../services/product.service';
import { IKeyboard } from '../../models/keyboard';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';

@Component({
  selector: 'app-keyboards-list',
  standalone: true,
  imports: [TableDataComponent,HttpClientModule],
  templateUrl: './keyboards-list.component.html',
  styleUrl: './keyboards-list.component.css',
  providers:[
    ProductService
  ]
})
export default class KeyboardsListComponent implements OnInit{

  constructor(private productService:ProductService){}

  keyboardList:IKeyboard[]=[];
  columnas: string[] = [];

  title:string = 'Keyboards';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('keyboard');

    this.productService.obtenerKeyboardList().subscribe(data=>{
      this.keyboardList = data;

      console.log(this.keyboardList);
    })

  }

  onAction(accion: Accion) {
     if (accion.accion == 'Editar') {
      this.editar(accion.fila)
    } else if (accion.accion == 'Eliminar') {
      this.eliminar(accion.fila.nombre)
    }
  }

  editar(objeto:any){
    console.log("editar", objeto)
  }

  eliminar(nombre:string){
    console.log("eliminar",nombre)
  }


}
