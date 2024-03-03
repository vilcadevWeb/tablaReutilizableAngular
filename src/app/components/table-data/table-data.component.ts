import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Accion } from '../../models/tabla-columna';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent implements OnInit {



  ngOnInit(): void {
    console.log("hola")
  }

  title = '';
  columnas: string[] = [];
  dataSource: any = [];


  @Input() set titulo(title: any) {
    this.title = title;
  }

  @Input() set columns(columns: string[]) {
    this.columnas = columns;
  }

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  // Que data va a fluir?, añadir el Json y las interfaces, ya ahí añadir el action
  // Implementar el Accion

  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion: string, row?: any) {
    this.action.emit({ accion: accion, fila: row });
  }

}
