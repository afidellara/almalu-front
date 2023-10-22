import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/models/Empleado.model';
import { LoginService } from 'src/app/services/LoginService.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
@Injectable()
export class MenuComponent implements OnInit {
  empleado: Empleado | null;
  usuarioLogin : boolean; 

  constructor(
    private cookieService: CookieService,
    private loginService: LoginService, 
    private route: Router
  ) {
  }

  ngOnInit(): void {
    const cookieData = this.cookieService.get('empleado');
    if (cookieData) {
      try {
        const data = JSON.parse(cookieData);

        if (data.empleado) {
          this.empleado = data.empleado as Empleado;
        } else {
          console.warn('Cookie no encontrada')
        }
      } catch (error) {
        console.error('Error al interpretar los datos de la cookie.', error);
      }
    } else {
      console.warn('No se encontraron datos en la cookie.');
    }
    
  }

  mostrarMenu(): boolean{
    this.usuarioLogin=this.loginService.estaLogueadoEmpleado()
    if(!this.usuarioLogin){
      return this.usuarioLogin=false
    }
     return this.usuarioLogin
  }

  cerrarSession() {
    this.loginService.cerrarSesion();
    this.route.navigate(['/login'])
    this.empleado=null
  }
}
