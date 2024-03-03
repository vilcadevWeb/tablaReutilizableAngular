import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKeyboard } from '../models/keyboard';
import { IMouse } from '../models/mouse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ){ }

  obtenerKeyboardList():Observable<IKeyboard[]>{
    return this.http.get<IKeyboard[]>("/assets/data/keyboardList.json");
  }

  obtenerMouseList():Observable<IMouse[]>{
    return this.http.get<IMouse[]>("/assets/data/mouseList.json");
  }
}
