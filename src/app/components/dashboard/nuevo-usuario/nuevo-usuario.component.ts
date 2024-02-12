import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ApiEstudiantesService } from '../../../services/api-estudiantes.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent implements OnInit {

  formEstudiante = new FormGroup({
    nombre: new FormControl('', [Validators.required
      , Validators.maxLength(30)]),
    apellido: new FormControl('', [Validators.required
      , Validators.maxLength(30)]),
    edad: new FormControl('',[Validators.required
      , Validators.min(1)]),
    carrera: new FormControl(''
    , [Validators.required
    , Validators.maxLength(30)])
  });

  idEstudiante!: string;

  constructor(private apiEstudiantee: ApiEstudiantesService
    , private router: Router
    , private route: ActivatedRoute) {}

    ngOnInit(): void {
      const idEstudiante = this.route.snapshot.paramMap.get('id');
      if(idEstudiante){
        this.idEstudiante = idEstudiante;
        this.datosEstudiante(idEstudiante);
      }
    }

  //UN POST
  
  guardarEstudiante():void {
    console.log('>>>>>>>>>>>>>',this.formEstudiante);
    this.formEstudiante.markAllAsTouched();
    if(this.formEstudiante.valid) {
      if(this.idEstudiante) {
        this.editarEstudiante();
      } else {
        this.nuevoEstudiante();
      }
    }
  }

  cancelarEstudiante(): void {
    Swal.fire({
      icon: "warning",
      title: "ESTA SEGURO DE CANCELAR EL REGISTRO DEL ESTUDIANTE?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "red",
      allowOutsideClick: false
    }).then((result) => {
      if(result.isConfirmed) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  datosEstudiante(idEstudiante: string): void {
    this.apiEstudiantee.obetnerEstudiante(idEstudiante).subscribe(datos => {
      this.formEstudiante.patchValue({
        nombre: datos.nombre,
        apellido: datos.apellido,
        edad: datos.edad,
        carrera: datos.carrera
      });
    });
  }
  
  nuevoEstudiante(): void {
    this.apiEstudiantee.nuevoEstudiante(
      {
        "nombre": this.formEstudiante.value.nombre,
        "apellido": this.formEstudiante.value.apellido,
        "edad": this.formEstudiante.value.edad,
        "carrera": this.formEstudiante.value.carrera
      }
    ).subscribe(datos =>{
      console.log('Estudiante guardado', datos);
      Swal.fire({
        icon: "success",
        title: "EL ESTUDIANTE A SIDO GUARDADO CORRECATEMNTE",
        text: "Codigo del estudiante: "+datos.id,
        confirmButtonText: "Aceptar",
        allowOutsideClick: false
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigate(['dashboard']);
        }
      });
    });
  }

  editarEstudiante(): void {
    this.apiEstudiantee.editarEstudiante(this.idEstudiante,
      {
        "nombre": this.formEstudiante.value.nombre,
        "apellido": this.formEstudiante.value.apellido,
        "edad": this.formEstudiante.value.edad,
        "carrera": this.formEstudiante.value.carrera
      }
    ).subscribe(datos =>{
      console.log('Estudiante guardado', datos);
      Swal.fire({
        icon: "success",
        title: "EL ESTUDIANTE A SIDO EDITADO CORRECATEMNTE",
        text: "Codigo del estudiante: "+datos.id,
        confirmButtonText: "Aceptar",
        allowOutsideClick: false
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigate(['dashboard']);
        }
      });
    });
  }

}
