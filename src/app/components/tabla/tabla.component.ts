import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/Ciudad.model';
import { Cliente } from 'src/app/models/Cliente.model';
import { Empleado } from 'src/app/models/Empleado.model';
import { CiudadesService } from 'src/app/services/CiudadesService.service';
import { ClienteService } from 'src/app/services/ClienteService.service';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  persona: any = {
    cedula: '',
    tipoDocumento: '',
    nombres: '',
    apellidos: '',
    sexo: '',
    fechaNacimiento: new Date('00/00/0000'),
    telefono: '',
    ciudad: '',
    correo: '',
    password: '',
  };

  titulo: string;
  ciudades: Ciudad[];
  personas: any[];
  cedulaBuscar: string;

  ngOnInit(): void {
    this.listar();
    this.obtenerCiudades();
  }

  constructor(
    private empleadoService: EmpleadoService,
    private route: Router,
    private ciudadService: CiudadesService,
    private clienteService: ClienteService
  ) {}

  //GESTIONAR
  listar() {
    if (this.route.url === '/empleados') {
      this.listarEmpleados();
      this.titulo = 'EMPLEADOS';
    } else if (this.route.url === '/clientes') {
      this.titulo = 'CLIENTES';
      this.listarClientes();
    }
  }

  eliminar(cedula: any) {
    if (this.route.url === '/empleados') {
      this.eliminarEmpleado(cedula);
    } else if (this.route.url === '/clientes') {
      this.eliminarCliente(cedula);
    }
  }

  obtenerDatos(cedula: any){
    if (this.route.url === '/empleados') {
      this.obtenerEmpleado(cedula);
    } else if (this.route.url === '/clientes') {
      this.obtenerCliente(cedula);
    }
  }

  modificar(value: any){
    if (this.route.url === '/empleados') {
      this.modificaEmpleado(value);
    } else if (this.route.url === '/clientes') {
      this.modificaCliente(value);
    }
  }

  // EMPLEADO
  listarEmpleados() {
    this.empleadoService.getEmpleado().subscribe((empleados) => {
      this.personas = empleados;
    });
  }

  eliminarEmpleado(cedula: any) {
    this.empleadoService.eliminarEmpleado(cedula).subscribe((empleado) => {
      this.listarEmpleados();
    });
  }

  obtenerEmpleado(cedula: any) {
    this.empleadoService.obtenerEmpleado(cedula).subscribe((datos) => {
      this.persona = datos;
    });
  }

  modificaEmpleado({ value }: { value: Empleado }) {
    this.empleadoService.modificarEmpleado(value.cedula, value).subscribe(
      () => {
        this.listarEmpleados();
      },
      (error) => {
        console.error('Error al modificar el empleado:', error);
      }
    );
  }

  // CIUDADES
  obtenerCiudades() {
    this.ciudadService.getCiudades().subscribe(
      (data) => {
        console.log(data);
        this.ciudades = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // CLIENTE

  listarClientes() {
    this.clienteService.getCliente().subscribe((clientes) => {
      this.personas = clientes;
    });
  }

  eliminarCliente(cedula: any) {
    this.clienteService.eliminarCliente(cedula).subscribe((empleado) => {
      this.listarEmpleados();
    });
  }

  obtenerCliente(cedula: any) {
    this.clienteService.obtenerCliente(cedula).subscribe((datos) => {
      this.persona = datos;
    });
  }

  modificaCliente({ value }: { value: Cliente }) {
    this.clienteService.modificarCliente(value.cedula, value).subscribe(
      () => {
        this.listarClientes();
      },
      (error) => {
        console.error('Error al modificar el cliente:', error);
      }
    );
  }
}
