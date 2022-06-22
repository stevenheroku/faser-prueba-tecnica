
//librerias que utilizo en el components. ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AppService } from './app.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Tarea } from './tarea';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  columnas: string[] = ['id', 'titulo', 'minutos','borrar'];//creo un arreglo de las columnas que utilizare en la tabla

  

  //creo un arreglo de la clase tarea por default con 5 ejemplos el cual nos permitira agregar nuevas tareas mas.
  datos: Tarea[] = [new Tarea(1, 'Sacar a pasear al perro', 15),
    new Tarea(2, 'Sacar la basura', 5),
    new Tarea(3, 'Cocinar la cena', 30),
    new Tarea(4, 'Lavar la ropa', 50),
    new Tarea(5, 'Regar las plantas', 20)
  
  ];

  dataSource:any;

  tareaselect: Tarea = new Tarea(0, "", 0);

  @ViewChild(MatTable,{static:true}) tabla1!: MatTable<Tarea>;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  //este metodo lo utilizo para poder eliminar una tarea registrada en la tabla
  borrarFila(id: number) {
    if (confirm("Si, Desea Eliminar la Tarea?")) {
      this.datos.splice(id, 1);
      this.tabla1.renderRows();
    }
  }

  //con este metodo podemos agregar una nueva tarea insertando el id, el titulo y los minutos.
  agregar() {
    this.datos.push(new Tarea(this.tareaselect.id, this.tareaselect.titulo, this.tareaselect.minutos));
    this.tabla1.renderRows();
    this.tareaselect = new Tarea(0, "", 0);
  }


  ngOnInit() {
		
		this.dataSource = new MatTableDataSource<Tarea>(this.datos);
    	this.dataSource.sort = this.sort;
	}

	 
  
}
