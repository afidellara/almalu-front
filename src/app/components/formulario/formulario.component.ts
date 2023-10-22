import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/services/CiudadesService.service';
import { Ciudad } from '../../models/Ciudad.model';
import { AdministradorService } from 'src/app/services/AdministradorService.service';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/EmpleadoService.service';
import { ClienteService } from 'src/app/services/ClienteService.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  ciudades: Ciudad[];
  miFormulario: FormGroup;
  titulo: string;
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

  constructor(
    private ciudadService: CiudadesService,
    private administradroService: AdministradorService,
    private route: Router,
    private empleadoService: EmpleadoService,
    private clienteService: ClienteService,
    private toastr: ToastrService, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tituloPagina()
    this.obtenerCiudades();
    this.administradroService.getAdministrador().subscribe((datos) => {
      console.log(datos);
    });

    this.miFormulario = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      tipoDocumento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
      fechaNacimiento: [new Date(), Validators.required], // Puedes ajustar la fecha inicial como mejor te convenga
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      ciudad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    if(!this.miFormulario.valid){
  console.log("CAMPOS VACIOS")
    }
  }

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

  tituloPagina() {
    if (this.route.url === '/admin') {
      this.titulo = 'REGISTRAR ADMINISTRADOR';
    } else if (this.route.url === '/empleado') {
      this.titulo = 'REGISTRAR EMPLEADO';
    } else if (this.route.url === '/cliente') {
      this.titulo = 'REGISTRAR CLIENTE';
    }
  }

  agregarAdministrador({ value }: { value: any }) {
    if (this.route.url === '/admin') {
      this.administradroService.agregarAdministrador(value).subscribe(
        (data) => {
          this.toastr.success('Registro exitoso', 'Administrador registrado'); 
          this.route.navigate(['/']);
          console.log(data);
        },
        (error) => {
          console.log('No se puedo agregar el administrador ' + error);
        }
      );
      console.log('ADMINISTRADOR');
    } else if (this.route.url === '/empleado') {
      this.empleadoService.agregarEmpleado(value).subscribe(
        (data) => {
          this.toastr.success('Registro exitoso', 'Empleado registrado');
          this.route.navigate(['/empleados']);
          console.log(data);
        },
        (error) => {
          console.log('No se puedo agregar el empleado ' + error);
        }
      );
      console.log('EMPLEADO');
    } else if (this.route.url === '/cliente') {
      this.clienteService.agregarCliente(value).subscribe(
        (data) => {
          this.toastr.success('Registro exitoso', 'Cliente registrado');
          this.route.navigate(['/']);
          console.log(data);
        },
        (error) => {
          console.log('No se puedo agregar el cliente ' + error);
        }
      );
      console.log('CLEINTE');
    }
  }
}
