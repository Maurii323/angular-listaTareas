import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  // el localStorage es es una API que permite almacenar datos en el navegador de forma persistente.(database)
  // la key es la clave por la cual se hace referencia a los items que queremos traer
  private localStorageKey = 'listaTareas';

  getTareas():string[]{
    //trae todos los items del localstorage con esa clave y convierte el JSON en un objeto JS
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTarea(tarea:string){
    const tareas = this.getTareas();  // traigo la lista de tareas
    tareas.push(tarea)                // agrego la tarea
    //setItem setea el localStore con la tarea agregada
    //JSON.stringify convierte el objeto tareas a una cadena de texto en formato JSON para el localStorage 
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }

  eliminarTarea(index: number){
    const tareas = this.getTareas();      // traigo la lista de tareas
    tareas.splice(index, 1)                // elimino la tarea con ese indice,el 1 es cuantas tareas eliminar
    //setItem setea el localStore con la tarea eliminada
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas))
  }
}
