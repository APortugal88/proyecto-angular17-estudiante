# FrontEstudiantes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## ReSolucion de Problemas

Se creo un fake server de estudiantes con los siguientes campos: id, nombre, apellido, edad y carrera. El archivo db.json contiene
todos los datos de los estudiantes para el consumo de las api, la cual se encuentra la capeta "fake-server"

Se creo el archivo api-estudiantes.service.ts (la cual se encuentra dentro de la carpeta services), est contiene los siguientes endpoints:

* (GET) getEstudiantes - Para la obtener del el lsiatdo de estudiantes

* (POST) nuevoEstudiante - Para el Registro de un nuevo estudiante

* (DELETE) elimnarEstudiante - Para la eliminacion de un estudiante

* (GET) obetnerEstudiante - Para la obtencion de un estudiantes a traves de su id

* (PUT) editarEstudiante - Para la actualizacion de datos de un estudiante

La opciones se encuentra implementadas dentro de la pantalla dashborad, en listado de estudiante donde en cada fila tiene la opcion de editar o eliminar al estudiante selecionado.

En la parte superio de la misma pantalla se encuentra la opcion "nuevo usuario", en cual redireccionara a una nueva pantalla para el registro de un nuevo estudiante.

Cabe aclarar que en la pantalla login se pueden introducir cualquier nombre de usuario y cualquier contraseña con una longitud igual o mayor a 5, para que se habilite el boton ingrear y se puedan entrar a las respectivas pantallas.

## Development server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
