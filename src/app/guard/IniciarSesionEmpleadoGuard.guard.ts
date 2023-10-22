import { Injectable } from "@angular/core";
import { LoginService } from "../services/LoginService.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";


@Injectable()
export class IniciarSesionEmpleadoGuard implements CanActivate{
    constructor(private loginService: LoginService, private router: Router){}
    
    
    canActivate(): boolean {
        const existeEmpleadoCookie = this.loginService.estaLogueadoEmpleado();
        if (existeEmpleadoCookie) {
          // La cookie "empleado" existe, permitir acceso a la ruta protegida
          return true;
        } else {
          // La cookie "empleado" no existe, redirigir al usuario a la página de inicio de sesión
          this.router.navigate(['/login']);
          return false;
        }
      }
}