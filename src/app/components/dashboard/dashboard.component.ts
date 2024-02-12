import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { ApiEstudiantesService } from '../../services/api-estudiantes.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

export interface Estudiante {
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  nombres_columnas: string[] = ['id', 'nombre', 'apellido', 'edad', 'carrera', 'opciones'];

  //GET A ESTUDIANTES (iMPLEMENTACION DEL METODO PARA LISTADO DE ESTUDIANTES)
  lista_estudiantes!: Estudiante[];

  constructor(private apiEstudiantes: ApiEstudiantesService, private router: Router) {}

  ngOnInit(): void{
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this.apiEstudiantes.getEstudiantes().subscribe(datos => {
      this.lista_estudiantes = datos;
      console.log(this.lista_estudiantes);
    });
  }

  eliminarEstudiante(idEstudiante: string){
    Swal.fire({
      icon: "warning",
      title: "ESTA SEGURO DE ELIMINAR AL ESTUDIANTE "+idEstudiante+"?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "red",
      allowOutsideClick: false
    }).then((result) => {
      if(result.isConfirmed) {
        this.apiEstudiantes.elimnarEstudiante(idEstudiante).subscribe(datos => {
          console.log('Estudiante Eliminado', datos);
          this.obtenerEstudiantes();
        });
      }
    });
  }

  editarEstudiante(idEstudiante: string) {
    this.router.navigate([`editar/${idEstudiante}`]);
  }

}
