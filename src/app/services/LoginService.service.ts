import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  url: string = 'http://localhost:4000/almalu/empleado';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(correo: string, password: string): Observable<any> {
    const body = { correo, password };
    return this.http.post<Empleado>(`${this.url}/login`, body);
  }

  guardarInicioSesionEnCookie(empleado: Empleado) {
    this.cookieService.set('empleado', JSON.stringify(empleado));
  }

  cerrarSesion() {
    this.cookieService.delete('empleado');
  }

  estaLogueadoEmpleado(): boolean {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const empleadoCookie = cookies.find(cookie => cookie.startsWith('empleado='));
    return !!empleadoCookie;
  }

}
