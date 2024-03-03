import { keyboardResponse } from "./keyboard";
import { mouseResponse } from "./mouse";



//* El parámetro genérico T en la interfaz Accion
//* permite que la propiedad fila pueda ser un objeto de cualquier tipo.

export interface Accion<T = any> {
  accion: string; //editar - eliminar
  fila?: T // registro
}

export const getEntityPropiedades = (entidad: string): Array<any> => {
  let resultados: any = [];
  let clase: any;

  switch(entidad){
    case 'keyboard':
      clase = new keyboardResponse(); break;
    case 'mouse':
      clase = new mouseResponse(); break;

  }

  if(clase){
    resultados = Object.keys(clase);
  }
  return resultados
}
