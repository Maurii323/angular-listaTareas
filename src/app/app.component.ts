import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  listaTareas?: string[];
  nuevaTarea: string = "";
  // nueva manera de inyectar un servicio/dependencia
  private _tareasService = inject(TareasService)
  tareaVacia:boolean = false

  // en el inicio del componente trae todas las tareas del servicio
  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    if(this.nuevaTarea){
      this._tareasService.agregarTarea(this.nuevaTarea);
      this.tareaVacia = false;
    }else{
      this.tareaVacia = true;
    }
    this.nuevaTarea = "";
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index:number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
