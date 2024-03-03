import { Component, OnInit } from '@angular/core';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { ProductService } from '../../services/product.service';
import { IMouse } from '../../models/mouse';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mouses-list',
  standalone: true,
  imports: [TableDataComponent,HttpClientModule],
  templateUrl: './mouses-list.component.html',
  styleUrl: './mouses-list.component.css',
  providers:[
    ProductService
  ]
})
export default class MousesListComponent implements OnInit{

  constructor(private productService:ProductService){}
  columnas: string[] = [];
  mouseList:IMouse[] =[];

  title:string = 'Mouses';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('mouse');

    this.productService.obtenerMouseList().subscribe(data=>{
      this.mouseList = data;

      console.log(this.mouseList);
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
